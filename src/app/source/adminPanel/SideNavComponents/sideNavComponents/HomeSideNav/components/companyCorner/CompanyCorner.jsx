import { useEffect, useState } from "react";
import GlobalDataGrid from "../../../../../../../components/GlobalDataGrid/GlobalDataGrid";
import { toast } from "react-toastify";
import CompanyDataForm from "./CompanyDataForm";
import EditIcon from "@mui/icons-material/Edit";
import { useAtom } from "jotai";
import { adminTitleAtom } from "../../../../../../../assests/globalvars/themeatom";
import { getDatabase, ref, onValue, get, child } from "firebase/database";

const CompanyCorner = () => {
  const [openCompanyDataForm, setOpenCompanyDataForm] = useState(false);
  const [editCompanyDataForm, setEditCompanyDataForm] = useState(false);
  const [companydatarow, setCompanyDataRow] = useState();

  const [rowdata, setRowData] = useState({});

  const handleOpenCompanyDataForm = () => setOpenCompanyDataForm(true);
  const handleCloseCompanyDataForm = () => setOpenCompanyDataForm(false);
  const handleEditOpenCompanyDataForm = () => setEditCompanyDataForm(true);
  const handleEditCloseCompanyDataForm = () => setEditCompanyDataForm(false);
  const [admintitle, setAdminTitle] = useAtom(adminTitleAtom);

  useEffect(() => {
    setAdminTitle("Company Corner");
    const dbRef = ref(getDatabase());
    get(child(dbRef, "1SXErd7jF1NR06Vpv26bTILUCOqEwCjjExzZrcRGvTnM/Sheet1"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setCompanyDataRow(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCompanyData = (data) => {
    toast.success("Data Added Successfully");
    setOpenCompanyDataForm(false);
    console.log("New Company Data:", data);
  };

  const companyCornerColumns = [
    { field: "Companies", headerName: "Company Name", width: 150 },
    { field: "Address", headerName: "Address", width: 180 },
    {
      field: "Candidate_Requirements",
      headerName: "Candidate Requirements",
      width: 180,
    },
    {
      field: "Candidates_sent",
      headerName: "Candidates Sent",
      width: 180,
    },
    { field: "Contact_Person", headerName: "Contact Person", width: 180 },
    { field: "G_B", headerName: "G B", width: 180 },
    { field: "Job_Profiles", headerName: "Job Profiles", width: 200 },
    { field: "Location", headerName: "Location", width: 180 },
    {
      field: "Offer_letter_Issued",
      headerName: "Offer Letter Issued",
      width: 180,
    },
    { field: "Status", headerName: "Status", width: 180 },
    { field: "Vacancy_Required", headerName: "Vacancy Required", width: 180 },
    { field: "Vacancy_pending", headerName: "Vacancy Pending", width: 180 },
    { field: "Work_Mode", headerName: "Work Mode", width: 180 },
    { field: "Qualification", headerName: "Qualification", width: 180 },
  ];

  return (
    <>
      <div className="relative w-full h-[calc(100vh-100px)]">
        <GlobalDataGrid
          title="Company Corner"
          rows={companydatarow ? companydatarow : []}
          columns={companyCornerColumns}
          adddatafunc={handleOpenCompanyDataForm}
          navpath={"/admin"}
          getRowId={(row) => `${row.Companies}-${row.Address}`}
          selectedcard={null}
        />
      </div>

      {openCompanyDataForm && (
        <CompanyDataForm
          className="overflow-y-scroll w-screen h-screen pt-[3%]"
          open={openCompanyDataForm}
          onClose={handleCloseCompanyDataForm}
          onAdd={handleCompanyData}
          command={"upload"}
        />
      )}
      {editCompanyDataForm && (
        <CompanyDataForm
          data={rowdata}
          className="overflow-y-scroll w-screen h-screen pt-[3%]"
          open={editCompanyDataForm}
          onClose={handleEditCloseCompanyDataForm}
          onAdd={handleCompanyData}
          command={"update"}
        />
      )}
    </>
  );
};

export default CompanyCorner;
