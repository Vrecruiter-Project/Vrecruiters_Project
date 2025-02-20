import React, { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import GlobalDataGrid from "../../../../../../../components/GlobalDataGrid/GlobalDataGrid";
import CandidateDataForm from "./CandidateDataForm";
import "react-data-grid/lib/styles.css";
import useFileDownloader from "../../../../../../../components/fireBase/fireBaseHooks/FileDownloadComponent";
import { useAtom } from "jotai";
import {
  adminTitleAtom,
  datachangestateatom,
} from "../../../../../../../assests/globalvars/themeatom";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material"; // Add this for pagination button
import { useNavigate } from "react-router-dom";
import useCustomToolbar from "../../../../../../../components/GlobalDataGrid/dataGridCustomToolbar/DataGridCustomToolbar";

const CandidateCorner = () => {
  const [openCandidateDataForm, setOpenCandidateDataForm] = useState(false);
  const [editCandidateDataForm, setEditCandidateDataForm] = useState(false);
  const [candidaterowsdata, setCandidaterowsdata] = useState([]);
  const [rowdata, setRowData] = useState({});
  const [resumeFile, setResumeFile] = useState();
  const { fileContent, downloadFile } = useFileDownloader();
  const [datachangestate, setDataChangeState] = useAtom(datachangestateatom);
  const handleOpenCandidateDataForm = () => setOpenCandidateDataForm(true);
  const handleCloseCandidateDataForm = () => setOpenCandidateDataForm(false);
  const handleEditOpenCandidateDataForm = () => setEditCandidateDataForm(true);
  const handleEditCloseCandidateDataForm = () =>
    setEditCandidateDataForm(false);
  const [admintitle, setAdminTitle] = useAtom(adminTitleAtom);
  const navigate = useNavigate();
  const { onAddDataclick, CustomToolbar } = useCustomToolbar("/admin/home");

  // Pagination-related states
  const [lastVisibleDoc, setLastVisibleDoc] = useState(null); // Keep track of last visible document for pagination

  useEffect(() => {
    setAdminTitle("Candidate Corner");
    onAddDataclick(handleOpenCandidateDataForm);
    loadMoreData(); // Initial load with pagination
  }, []);

  // Fetch data with pagination
  const fetchData = async (lastVisibleDoc = null) => {
    const storage = getStorage();
    const getDownloadUrl = async (path) => {
      try {
        const url = await getDownloadURL(ref(storage, path));
        return url;
      } catch (error) {
        console.error("Error fetching download URL:", error);
        return "#";
      }
    };

    const collectionRef = collection(getFirestore(), "CANDIDATESDATA");
    let q;

    if (lastVisibleDoc) {
      // Fetch next set of documents after the last visible document
      q = query(
        collectionRef,
        orderBy("dateinfo", "desc"),
        startAfter(lastVisibleDoc),
        limit(50)
      ); // Fetch 50 records at a time
    } else {
      // Initial load
      q = query(collectionRef, orderBy("dateinfo", "desc"), limit(50));
    }

    const querySnapshot = await getDocs(q);

    const updatedData = await Promise.all(
      querySnapshot.docs.map(async (doc) => ({
        id: doc.id,
        ...doc.data(),
        resume: await getDownloadUrl(`${doc.data().resume}/resume`),
      }))
    );

    // Get the last visible document to use for pagination
    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

    return { updatedData, lastVisible };
  };

  const loadMoreData = async () => {
    const { updatedData, lastVisible } = await fetchData(lastVisibleDoc);
    setCandidaterowsdata((prevData) => [...prevData, ...updatedData]); // Append new data to the existing data
    setLastVisibleDoc(lastVisible); // Update the last visible document for pagination
  };

  const handleDeleteData = async (data) => {
    console.log(data.id);
    await deleteDoc(doc(getFirestore(), `CANDIDATESDATA`, data.id)).then(() => {
      console.log("deleted doc ---------");
      setCandidaterowsdata(
        candidaterowsdata.filter((row) => row.id !== data.id)
      );
    });
  };

  const handleCandidateData = (data) => {
    toast.success("Data Added Successfully");
    setOpenCandidateDataForm(false);
    console.log("New Candidate Data:", data);
  };

  useEffect(() => {
    if (rowdata.resume) {
      downloadFile(rowdata.resume).then(() => {
        console.log("resume ---------", fileContent);
        setResumeFile(fileContent);
      });
    }
  }, [rowdata]);

  const candidateColumns = [
    {
      field: "edit",
      headerName: "Edit",
      width: 50,
      renderCell: (params) => (
        <button
          onClick={() => {
            console.log("working");
            setRowData(params.row);
            handleEditOpenCandidateDataForm();
          }}
        >
          <EditIcon />
        </button>
      ),
    },
    { field: "fullName", headerName: "Full Name", width: 150 },
    { field: "jobProfile", headerName: "Profile", width: 150 },
    { field: "age", headerName: "Age", width: 60 },
    { field: "address", headerName: "Address", width: 180 },
    { field: "whatsappNumber", headerName: "WhatsApp Number", width: 180 },
    { field: "gender", headerName: "Gender", width: 100 },
    { field: "qualification", headerName: "Qualification", width: 180 },
    { field: "enrollmentStatus", headerName: "Enrollment Status", width: 180 },
    { field: "fees", headerName: "Fees", width: 150 },
    { field: "remarks", headerName: "Remarks", width: 180 },
    {
      field: "dateinfo",
      headerName: "Date",
      width: 150,
      renderCell: (params) => (
        <input type="date" value={params.value} readOnly />
      ),
    },
    {
      field: "resume",
      headerName: "Resume",
      width: 100,
      renderCell: (params) => (
        <a
          style={{ color: "blue" }}
          href={params.value}
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
      ),
    },
    { field: "hr", headerName: "HR", width: 100 },
    {
      field: "recruiter", // Added recruiter field
      headerName: "Recruiter",
      width: 180,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 50,
      renderCell: (params) => (
        <button
          onClick={() => {
            console.log("working");
            handleDeleteData(params.row);
          }}
        >
          <DeleteIcon />
        </button>
      ),
    },
  ];

  if (!candidaterowsdata.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="relative">
        <GlobalDataGrid
          classname={"w-[1000px] h-full"}
          title="Candidate Corner"
          rows={candidaterowsdata}
          columns={candidateColumns}
          adddatafunc={handleOpenCandidateDataForm}
          navpath={"/admin"}
          selectedcard={null}
        />
        {lastVisibleDoc && ( // Load More Button for pagination
          <Button
            onClick={loadMoreData}
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
          >
            Load More
          </Button>
        )}
        {openCandidateDataForm && (
          <CandidateDataForm
            className="overflow-y-scroll w-screen h-screen pt-[3%]"
            open={openCandidateDataForm}
            onClose={handleCloseCandidateDataForm}
            onAdd={handleCandidateData}
            command={"upload"}
          />
        )}
        {editCandidateDataForm && (
          <CandidateDataForm
            className="overflow-y-scroll w-screen h-screen pt-[3%]"
            open={editCandidateDataForm}
            onClose={handleEditCloseCandidateDataForm}
            onAdd={handleCandidateData}
            command={"update"}
            data={rowdata}
          />
        )}
      </div>
    </>
  );
};

export default CandidateCorner;
