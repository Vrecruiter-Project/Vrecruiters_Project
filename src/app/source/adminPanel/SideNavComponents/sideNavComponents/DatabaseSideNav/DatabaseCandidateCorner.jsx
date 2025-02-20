import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-data-grid/lib/styles.css";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  or,
} from "firebase/firestore";
import CandidateDataForm from "../HomeSideNav/components/candidateCorner/CandidateDataForm";
import EditIcon from "@mui/icons-material/Edit";
import useFileDownloader from "../../../../../components/fireBase/fireBaseHooks/FileDownloadComponent";
import { useAtom } from "jotai";
import {
  datachangestateatom,
  adminTitleAtom,
} from "../../../../../assests/globalvars/themeatom";
import GlobalDataGrid from "../../../../../components/GlobalDataGrid/GlobalDataGrid";

const db = getFirestore();
const storage = getStorage();

const DatabaseCandidateCorner = () => {
  const [openCandidateDataForm, setOpenCandidateDataForm] = useState(false);
  const [editCandidateDataForm, setEditCandidateDataForm] = useState(false);
  const [candidaterowsdata, setCandidaterowsdata] = useState([]);
  const [rowdata, setRowData] = useState({});
  const [resumeFile, setResumeFile] = useState(null);
  const [documentsFetched, setDocumentsFetched] = useState(false); // Flag to prevent repeated fetching
  const user = getAuth().currentUser;
  const { fileContent, downloadFile } = useFileDownloader();
  const [datachangestate, setDataChangeState] = useAtom(datachangestateatom);
  const [admintitle, setAdminTitle] = useAtom(adminTitleAtom);

  const handleOpenCandidateDataForm = () => setOpenCandidateDataForm(true);
  const handleCloseCandidateDataForm = () => setOpenCandidateDataForm(false);
  const handleEditOpenCandidateDataForm = () => setEditCandidateDataForm(true);
  const handleEditCloseCandidateDataForm = () =>
    setEditCandidateDataForm(false);

  const handleCandidateData = (data) => {
    toast.success("Data Added Successfully");
    setOpenCandidateDataForm(false);
    console.log("New Candidate Data:", data);
  };

  useEffect(() => {
    setAdminTitle("Database Candidate Corner");
    const q = query(collection(getFirestore(), "CANDIDATEDATA"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setDataChangeState(!datachangestate);
    });
  }, []);

  // Fetch documents and candidate data
  useEffect(() => {
    const fetchDocumentsAndData = async () => {
      if (user && !documentsFetched) {
        try {
          // Fetch the document from Firestore
          const adminHandlersQuery = query(
            collection(db, "ADMINHANDLERS"),
            where("email", "==", user.email)
          );
          const adminHandlersSnapshot = await getDocs(adminHandlersQuery);

          if (!adminHandlersSnapshot.empty) {
            const adminHandlersData = adminHandlersSnapshot.docs.map((doc) =>
              doc.data()
            );
            const hrName = adminHandlersData[0]?.name;
            const hrfirstname = adminHandlersData[0]?.firstname;

            // Fetch candidates data with hrName
            const candidatesQuery = query(
              collection(db, "CANDIDATESDATA"),
              or(where("hr", "==", hrName), where("hr", "==", hrfirstname))
            );
            const candidatesSnapshot = await getDocs(candidatesQuery);
            const candidatesData = candidatesSnapshot.docs.map((doc) =>
              doc.data()
            );

            // Fetch resume URLs
            const updatedData = await Promise.all(
              candidatesData.map(async (item) => ({
                ...item,
                resume: item.resume
                  ? await getDownloadURL(ref(storage, `${item.resume}/resume`))
                  : null,
              }))
            );

            setCandidaterowsdata(updatedData);
            setDocumentsFetched(true); // Set flag to avoid repeated fetching
          }
        } catch (error) {
          console.error("Error fetching documents or data:", error);
        }
      }
    };

    fetchDocumentsAndData();
  }, [user, documentsFetched, datachangestate]);

  // Download and set resume file
  useEffect(() => {
    const fetchResumeFile = async () => {
      if (rowdata.resume) {
        try {
          await downloadFile(rowdata.resume);
          setResumeFile(fileContent);
        } catch (error) {
          console.error("Error downloading resume:", error);
        }
      }
    };

    fetchResumeFile();
  }, []);

  const candidateColumns = [
    {
      field: "edit",
      headerName: "Edit",
      width: 50,
      renderCell: (params) => (
        <button
          onClick={() => {
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
    { field: "age", headerName: "Age", width: 150 },
    { field: "address", headerName: "Address", width: 180 },
    { field: "whatsappNumber", headerName: "WhatsApp Number", width: 180 },
    { field: "gender", headerName: "Gender", width: 180 },
    { field: "qualification", headerName: "Qualification", width: 180 },
    { field: "enrollmentStatus", headerName: "Enrollment Status", width: 180 },
    { field: "fees", headerName: "Fees", width: 150 },
    { field: "remarks", headerName: "Remarks", width: 180 },
    { field: "recruiter", headerName: "Recruiter", width: 180 },
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
      width: 180,
      renderCell: (params) =>
        params.value ? (
          <a
            style={{ color: "blue" }}
            href={params.value}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        ) : (
          <span>No Resume Available</span>
        ),
    },
    { field: "hr", headerName: "HR", width: 180 },
  ];

  return (
    <>
      <div className="relative">
        <GlobalDataGrid
          title="Database Corner"
          rows={candidaterowsdata}
          columns={candidateColumns}
          adddatafunc={handleOpenCandidateDataForm}
          navpath={"/admin/database"}
          selectedcard={null}
        />

        {openCandidateDataForm && (
          <CandidateDataForm
            className="overflow-y-scroll w-screen h-screen pt-[3%]"
            open={openCandidateDataForm}
            onClose={handleCloseCandidateDataForm}
            onAdd={handleCandidateData}
            command="upload"
          />
        )}
        {editCandidateDataForm && (
          <CandidateDataForm
            data={{ ...rowdata, resume: resumeFile }}
            className="overflow-y-scroll w-screen h-screen pt-[3%]"
            open={editCandidateDataForm}
            onClose={handleEditCloseCandidateDataForm}
            onAdd={handleCandidateData}
            command="update"
            loggedinuserisnotmanager={user.email !== "kim@ck.com"}
          />
        )}
      </div>
    </>
  );
};

export default DatabaseCandidateCorner;
