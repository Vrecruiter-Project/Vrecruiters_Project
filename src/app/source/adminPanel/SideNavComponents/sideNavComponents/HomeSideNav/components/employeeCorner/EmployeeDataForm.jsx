import {
  Button,
  Container,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  styled,
  TextField,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import EmployeeDocsUpload from "./EmployeeDocsUpload";
import { v4 } from "uuid";
import { useFireBaseDocCrudOperations } from "../../../../../../../components/fireBase/fireBaseHooks/FireBaseDocCrudOperations";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const initialFormData = {
  fullName: "",
  profile: "",
  age: "",
  address: "",
  whatsappNumber: "",
  gender: "",
  qualification: "",
  salary: "",
  resume: "",
};

const EmployeeDataForm = ({
  open,
  onClose,
  onAdd,
  className,
  command,
  data,
}) => {
  const [formData, setFormData] = useState(initialFormData);
  const [docliststate, setDocListState] = useState([]);
  const [openDocUploadForm, setOpenDocUploadForm] = useState(false);
  const [special_id, setSpecialid] = useState(
    command === "update" ? data.id : v4()
  );
  const { set, update } = useFireBaseDocCrudOperations(
    `EMPLOYEEDATA/${special_id}`
  );

  const handleChange = (e) => {
    const { id, name, value } = e.target;
    setFormData({
      ...formData,
      [id || name]: value,
    });
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    onClose();
  };

  const openDocUploadFormFunc = () => {
    setOpenDocUploadForm(true);
  };

  const closeDocUploadFormFunc = () => {
    setOpenDocUploadForm(false);
  };

  const handleAdd = () => {
    onAdd(formData);
    if (command === "update") {
      update({ ...formData, id: special_id });
    } else {
      set({ ...formData, id: special_id });
      onAdd(formData); // Ensure this call is after successful set
    }
    console.log(formData);
    handleCancel();
  };

  useEffect(() => {
    setFormData({
      ...formData,
      documents: docliststate,
    });
  }, [docliststate]);

  const formFields = [
    { id: "fullName", label: "Full Name" },
    { id: "profile", label: "Profile" },
    { id: "age", label: "Age" },
    { id: "address", label: "Address" },
    { id: "whatsappNumber", label: "WhatsApp Number" },
    { id: "qualification", label: "Qualification" },
    { id: "salary", label: "Salary" },
  ];

  return (
    <>
      <Modal className={`${className}`} open={open} onClose={onClose}>
        <Container
          maxWidth="md"
          sx={{
            boxShadow: "2px 7px 24px 0px #e7e4e4",
            p: 6,
            position: "relative",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <h2 className="text-center text-3xl font-bold pb-10">
            Employee Onboarding Form
          </h2>
          <IconButton
            sx={{ position: "absolute", top: "10px", right: "10px" }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          <FormGroup>
            <Grid container spacing={3}>
              {formFields.map((field) => (
                <Grid item xs={12} key={field.id}>
                  <FormControl fullWidth>
                    <TextField
                      id={field.id}
                      label={field.label}
                      variant="filled"
                      value={formData[field.id]}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Grid>
              ))}
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Button
                    onClick={openDocUploadFormFunc}
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    disabled={formData.fullName.length === 0}
                  >
                    Upload Docs
                  </Button>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAdd}
                  >
                    Add
                  </Button>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
          </FormGroup>
        </Container>
      </Modal>
      <EmployeeDocsUpload
        open={openDocUploadForm}
        onClose={closeDocUploadFormFunc}
        filledFormData={formData}
        sendbackdata={(data) => setDocListState(data)}
        command={"upload"}
      />
    </>
  );
};

export default EmployeeDataForm;
