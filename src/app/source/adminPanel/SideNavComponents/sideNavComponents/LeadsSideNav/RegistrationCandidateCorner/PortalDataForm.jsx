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
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

import { v4 } from "uuid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useFireBaseDocCrudOperations } from "../../../../../../components/fireBase/fireBaseHooks/FireBaseDocCrudOperations";
import { useFireBaseStorageCrudOperations } from "../../../../../../components/fireBase/fireBaseHooks/FireBaseStorageCrudOperatuons";
import CircularProgressWithLabel from "../../../../../../components/progress/CircularProgressWithLabel";
import useFileDownloader from "../../../../../../components/fireBase/fireBaseHooks/FileDownloadComponent";

function formatDate(date) {
  const year = date.$y;
  const month = String(date.$M + 1).padStart(2, "0");
  const day = String(date.$D).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

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
  jobProfile: "",
  age: "",
  address: "",
  whatsappNumber: "",
  gender: "",
  qualification: "",
  resume: "",
  hr: "",
  dateinfo: null,
  enrollmentStatus: "enrolled",
  fees: "",
  remarks: "",
  resumeTouched: false,
};

const PortalDataForm = ({
  open,
  onClose,
  onAdd,
  className,
  data,
  command,
  loggedinuserisnotmanager,
}) => {
  const [formData, setFormData] = useState(data ? data : initialFormData);
  const [special_id, setSpecialid] = useState(
    command === "update" ? data.id : v4()
  );
  const { set, update } = useFireBaseDocCrudOperations(
    `REGISTRATIONFORMDATA/${special_id}`
  );
  const { upload, uploadProgress, remove } =
    useFireBaseStorageCrudOperations(``);

  const { fileContent, error, loading, downloadFile } = useFileDownloader();

  const handleChange = (e) => {
    if (e && e.target) {
      const { id, name, value } = e.target;
      setFormData({
        ...formData,
        [id || name]: value,
      });
    }
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dateinfo: date ? formatDate(date) : null,
    });
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.resume) {
      setFormData({ ...formData, resumeTouched: true });
      return;
    }
    try {
      if (formData.resume instanceof File) {
        await upload(
          `REGISTRATINFORMDATA/${formData.fullName}/resume`,
          formData.resume
        );
      }
      await set({
        ...formData,
        id: special_id,
        resume: `REGISTRATIONFORMDATA/${formData.fullName}`,
      });
      handleCancel();
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.resume instanceof File) {
        await upload(
          `REGISTRATIONFORMDATA/${formData.fullName}/resume`,
          formData.resume
        );
      }
      await update({
        ...formData,
        id: special_id,
        resume: `REGISTRATIONFORMDATA/${formData.fullName}`,
      });
      handleCancel();
    } catch (error) {
      console.error("Error updating form data:", error);
    }
  };

  const formFields = [
    { id: "fullName", label: "Full Name" },
    { id: "jobProfile", label: "Profile" },
    { id: "age", label: "Age" },
    { id: "address", label: "Address" },
    { id: "whatsappNumber", label: "WhatsApp Number" },
    { id: "qualification", label: "Qualification" },
  ];

  return (
    <Modal className={` ${className}`} open={open} onClose={onClose}>
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
          Candidate Onboarding Form
        </h2>
        <IconButton
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <form
          onSubmit={command === "upload" ? handleSubmit : handleUpdateSubmit}
        >
          <FormGroup disabled={loggedinuserisnotmanager}>
            <Grid container spacing={3}>
              {formFields.map((field) => (
                <Grid item xs={12} key={field.id}>
                  <FormControl fullWidth>
                    <TextField
                      id={field.id}
                      label={field.label}
                      variant="filled"
                      disabled={loggedinuserisnotmanager}
                      value={formData[field.id]}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Grid>
              ))}
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <FormControl fullWidth>
                      <DatePicker
                        id="dateinfo"
                        name="dateinfo"
                        value={
                          formData.dateinfo ? dayjs(formData.dateinfo) : null
                        }
                        disabled={loggedinuserisnotmanager}
                        onChange={handleDateChange}
                        label="Select Date"
                      />
                    </FormControl>
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <FormControl disabled={loggedinuserisnotmanager} fullWidth>
                  <InputLabel id="hr-select-label">HR</InputLabel>
                  <Select
                    labelId="hr-select-label"
                    id="hr"
                    name="hr"
                    value={formData.hr}
                    label="HR"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Khushi"}>Khushi</MenuItem>
                    <MenuItem value={"Manjeet"}>Manjeet</MenuItem>
                    <MenuItem value={"Ritika"}>Ritika</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    disabled={loggedinuserisnotmanager}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      disabled={loggedinuserisnotmanager}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      disabled={loggedinuserisnotmanager}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  error={!formData.resume && formData.resumeTouched}
                >
                  <Button
                    sx={{
                      backgroundColor: "hsl(231, 100%, 50%,.5)",
                    }}
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    disabled={loggedinuserisnotmanager}
                  >
                    {formData.resume ? "Change Resume" : "Add Resume"}
                    <CircularProgressWithLabel value={uploadProgress} />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setFormData({
                          ...formData,
                          resume: file,
                          resumeTouched: true,
                        });
                      }}
                    />
                  </Button>
                  {!formData.resume && formData.resumeTouched && (
                    <p style={{ color: "red", marginTop: "8px" }}>
                      Resume is required
                    </p>
                  )}
                </FormControl>
              </Grid>
            </Grid>
          </FormGroup>
          <FormGroup className="mt-3 space-y-4">
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Enrollment Status</FormLabel>
                <RadioGroup
                  row
                  aria-label="enrollmentStatus"
                  name="enrollmentStatus"
                  value={formData.enrollmentStatus}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="enrolled"
                    control={<Radio />}
                    label="Enrolled"
                  />
                  <FormControlLabel
                    value="not_enrolled"
                    control={<Radio />}
                    label="Not Enrolled"
                  />
                  <FormControlLabel
                    value="placed"
                    control={<Radio />}
                    label="Placed"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="fees"
                  label="Fees"
                  variant="filled"
                  name="fees"
                  value={formData.fees}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="remarks"
                  label="Remarks"
                  variant="filled"
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
          </FormGroup>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <Button
                sx={{
                  backgroundColor: "hsl(231, 100%, 50%,.5)",
                }}
                type="submit"
                variant="contained"
              >
                {command === "upload" ? "Submit" : "Update"}
              </Button>
            </FormControl>
          </Grid>
        </form>
      </Container>
    </Modal>
  );
};

export default PortalDataForm;
