import React, { useEffect, useState } from "react";
import GlobalDataGrid from "../../../../../../../components/GlobalDataGrid/GlobalDataGrid";
import { toast } from "react-toastify";
import EmployeeDataForm from "./EmployeeDataForm";
import { useFireBaseCollectionCrudOperations } from "../../../../../../../components/fireBase/fireBaseHooks/FireBaseCollectionCrudOperations";
import EditIcon from "@mui/icons-material/Edit";
import EmployeeDocsUpload from "./EmployeeDocsUpload";
import { useAtom } from "jotai";
import { adminTitleAtom } from "../../../../../../../assests/globalvars/themeatom";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";

const EmployeeCorner = () => {
  const [openEmployeeDataForm, setOpenEmployeeDataForm] = useState(false);
  const [openEditEmployeeDataForm, setopenEditEmployeeDataForm] =
    useState(false);

  const handleOpenEmployeeDataForm = () => setOpenEmployeeDataForm(true);
  const handleCloseEmployeeDataForm = () => setOpenEmployeeDataForm(false);
  const handleOpenEditEmployeeDataForm = () =>
    setopenEditEmployeeDataForm(true);
  const handleEditCloseEmployeeDataForm = () =>
    setopenEditEmployeeDataForm(false);
  const { data, readQuery } =
    useFireBaseCollectionCrudOperations("EMPLOYEEDATA");
  const [rowdata, setRowData] = useState({});
  const [docliststate, setDocListState] = useState([]);
  const [openDocUploadForm, setOpenDocUploadForm] = useState(false);
  const [admintitle, setAdminTitle] = useAtom(adminTitleAtom);
  const [employeerowdata, setEmployeerowdata] = useState();

  const openDocUploadFormFunc = () => {
    setOpenDocUploadForm(true);
  };

  const closeDocUploadFormFunc = () => {
    setOpenDocUploadForm(false);
  };
  const handleEmployeeData = (data) => {
    toast.success("Data Added Successfully");
    setOpenEmployeeDataForm(false);
    console.log("New Employee Data:", data);
  };

  const handleDeleteData = async (data) => {
    console.log(data.id);
    await deleteDoc(doc(getFirestore(), `EmployeeSDATA`, data.id)).then(() => {
      console.log("deleted doc ---------");
      setEmployeerowdata(employeerowdata.filter((row) => row.id !== data.id));
    });
  };

  useEffect(() => {
    readQuery;
    setEmployeerowdata(data);
    setAdminTitle("Employee Corner");
  }, []);

  const employeeColumns = [
    {
      field: "edit",
      headerName: "Edit",
      width: 50,
      renderCell: (params) => (
        <button
          onClick={() => {
            console.log("working");
            setRowData(params.row);
            handleOpenEditEmployeeDataForm();
          }}
        >
          <EditIcon />
        </button>
      ),
    },
    { field: "fullName", headerName: "Full Name", width: 150 },
    { field: "profile", headerName: "Profile", width: 150 },
    { field: "age", headerName: "Age", width: 150 },
    { field: "address", headerName: "Address", width: 180 },
    { field: "whatsappNumber", headerName: "WhatsApp Number", width: 180 },
    { field: "gender", headerName: "Gender", width: 180 },
    { field: "qualification", headerName: "Qualification", width: 180 },
    {
      field: "documents",
      headerName: "Documents",
      width: 180,
      renderCell: (params) => (
        <button
          className="text-blue-400 hover:text-blue-700"
          onClick={() => {
            openDocUploadFormFunc();
            setRowData(params.row);
          }}
        >
          Documents
        </button>
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

  const employeeRows = [
    {
      id: 1,
      fullName: "John Doe",
      profile: "Software Engineer",
      age: 23,
      address: "1146, Sector 69, Mohali",
      whatsappNumber: 3459876123,
      gender: "Male",
      qualification: "B.tech(IT)",
      cv: "john_cv.pdf",
    },
    {
      id: 2,
      fullName: "Tarun",
      profile: "Web Developer",
      age: 20,
      address: "1456, Near Metro, Zirakpur",
      whatsappNumber: 3454556123,
      gender: "Male",
      qualification: "B.tech(IT)",
      cv: "john_cv.pdf",
    },
  ];

  return (
    <div className="relative">
      <GlobalDataGrid
        title="Employee Corner"
        rows={employeerowdata ? employeerowdata : []}
        columns={employeeColumns}
        className="relative h-[calc(100vh-100px)] w-full"
        adddatafunc={handleOpenEmployeeDataForm}
        navpath={"/admin"}
        selectedcard={null}
      />

      {openEmployeeDataForm && (
        <EmployeeDataForm
          className="overflow-y-scroll w-screen h-screen pt-12"
          open={openEmployeeDataForm}
          onClose={handleCloseEmployeeDataForm}
          onAdd={handleEmployeeData}
          command={"upload"}
        />
      )}

      {openEditEmployeeDataForm && (
        <EmployeeDataForm
          data={rowdata}
          className="overflow-y-scroll w-screen h-screen pt-12"
          open={openEditEmployeeDataForm}
          onClose={handleEditCloseEmployeeDataForm}
          onAdd={handleEmployeeData}
          command={"update"}
        />
      )}
      <EmployeeDocsUpload
        open={openDocUploadForm}
        onClose={closeDocUploadFormFunc}
        filledFormData={rowdata}
        sendbackdata={(data) => setDocListState(data)}
        command={"update"}
        updatedata={rowdata}
      />
    </div>
  );
};

export default EmployeeCorner;
