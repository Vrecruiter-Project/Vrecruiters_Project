import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import "react-data-grid/lib/styles.css";
import { useAtom } from "jotai";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { useNavigate } from "react-router-dom";
import GlobalDataGrid from "../../../../../../components/GlobalDataGrid/GlobalDataGrid";
import useFileDownloader from "../../../../../../components/fireBase/fireBaseHooks/FileDownloadComponent";
import {
  adminTitleAtom,
  datachangestateatom,
} from "../../../../../../assests/globalvars/themeatom";
import useCustomToolbar from "../../../../../../components/GlobalDataGrid/dataGridCustomToolbar/DataGridCustomToolbar";
import PortalDataForm from "./PortalDataForm";
import { MenuItem, Select } from "@mui/material";

const PortalCorner = () => {
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
  const [rowModesModel, setRowModesModel] = useState({});

  useEffect(() => {
    setAdminTitle("Leads");
    onAddDataclick(handleOpenCandidateDataForm);
  }, []);

  const fetchData = async () => {
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

    const collectionRef = collection(getFirestore(), "REGISTRATIONFORMDATA");
    const unsubscribe = onSnapshot(collectionRef, async (snapshot) => {
      const updatedData = await Promise.all(
        snapshot.docs.map(async (doc) => ({
          id: doc.id,
          ...doc.data(),
          resume: await getDownloadUrl(`${doc.data().resume}/resume`),
        }))
      );
      setCandidaterowsdata(updatedData);
    });

    return () => unsubscribe();
  };

  const handleDeleteData = async (data) => {
    console.log(data.id);
    await deleteDoc(doc(getFirestore(), `REGISTRATIONFORMDATA`, data.id)).then(
      () => {
        console.log("deleted doc ---------");
        setCandidaterowsdata(
          candidaterowsdata.filter((row) => row.id !== data.id)
        );
      }
    );
  };
  const handleCandidateData = (data) => {
    toast.success("Data Added Successfully");
    setOpenCandidateDataForm(false);
    console.log("New Candidate Data:", data);
  };

  useEffect(() => {
    fetchData();
  }, [datachangestate]);

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
    { field: "experience", headerName: "Experience", width: 180 },
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
    {
      field: "hr",
      headerName: "HR",
      width: 100,
      renderCell: (params) => (
        <Select
          labelId="hr-select-label"
          id="hr"
          name="hr"
          value={params.row.hr}
          label="HR"
          onChange={(e) => {
            const washingtonRef = doc(
              getFirestore(),
              `REGISTRATIONFORMDATA/${params.row.id}`
            );
            updateDoc(washingtonRef, {
              hr: e.target.value,
            }).then(() => {
              toast("Updated");
            });
          }}
        >
          <MenuItem value={"Khushi"}>Khushi</MenuItem>
          <MenuItem value={"Manjeet"}>Manjeet</MenuItem>
          <MenuItem value={"Ritika"}>Ritika</MenuItem>
          <MenuItem value={""}>None</MenuItem>
        </Select>
      ),
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
          navpath={"/admin/leads"}
          selectedcard={null}
        />
        {openCandidateDataForm && (
          <PortalDataForm
            className="overflow-y-scroll w-screen h-screen pt-[3%]"
            open={openCandidateDataForm}
            onClose={handleCloseCandidateDataForm}
            onAdd={handleCandidateData}
            command={"upload"}
          />
        )}
        {editCandidateDataForm && (
          <PortalDataForm
            data={{ ...rowdata, resume: resumeFile }}
            className="overflow-y-scroll w-screen h-screen pt-[3%]"
            open={editCandidateDataForm}
            onClose={handleEditCloseCandidateDataForm}
            onAdd={handleCandidateData}
            command={"update"}
          />
        )}
      </div>
    </>
  );
};

export default PortalCorner;
