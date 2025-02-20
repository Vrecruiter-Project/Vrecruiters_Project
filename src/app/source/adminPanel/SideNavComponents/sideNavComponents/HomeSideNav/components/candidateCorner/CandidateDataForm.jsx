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
  Checkbox,
  Box,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { useFireBaseDocCrudOperations } from "../../../../../../../components/fireBase/fireBaseHooks/FireBaseDocCrudOperations";
import { useFireBaseStorageCrudOperations } from "../../../../../../../components/fireBase/fireBaseHooks/FireBaseStorageCrudOperatuons";
import { v4 } from "uuid";
import useFileDownloader from "../../../../../../../components/fireBase/fireBaseHooks/FileDownloadComponent";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { getAuth } from "firebase/auth";
import { useAtom } from "jotai";
import { RecentFormData } from "../../../../../../../assests/globalvars/RecentFormData";

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
  salary: "",
  resume: "",
  hr: "",
  dateinfo: null,
  enrollmentStatus: "not_enrolled",
  fees: "",
  remarks: "",
  recruiter: [], // Ensure this is initialized as an array
};

const CandidateDataForm = ({
  open,
  onClose,
  onAdd,
  className,
  data,
  command,
  loggedinuserisnotmanager,
}) => {
  // Initialize formData, ensuring recruiter is an array
  const initialRecruiters = Array.isArray(data?.recruiter)
    ? data.recruiter
    : [data?.recruiter].filter(Boolean); // Convert to array if not already

  const [formData, setFormData] = useState(
    { ...data, recruiter: initialRecruiters } || initialFormData
  );
  const [special_id, setSpecialid] = useState(
    command === "update" ? data.id : v4()
  );
  const { set, update } = useFireBaseDocCrudOperations(
    `CANDIDATESDATA/${special_id}`
  );
  const [FormDataCache, setFormDataCache] = useAtom(RecentFormData);
  const user = getAuth();
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

  useEffect(() => {
    setFormDataCache((dat) => {
      const existingIndex = dat.findIndex((item) => item.id === special_id);

      if (existingIndex !== -1) {
        const updatedData = [...dat];
        updatedData[existingIndex] = { formData, id: special_id };
        return updatedData;
      } else {
        return [...dat, { formData, id: special_id }];
      }
    });

    console.log({ formData, id: special_id });
    console.log(FormDataCache);
  }, [formData, special_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.resume) {
      setFormData({ ...formData, resumeTouched: true });
      return;
    }
    try {
      if (formData.resume instanceof File) {
        await upload(
          `CANDIDATESDATA/${formData.fullName}/resume`,
          formData.resume
        );
      }
      await set({
        ...formData,
        id: special_id,
        resume: `CANDIDATESDATA/${formData.fullName}`,
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
          `CANDIDATESDATA/${formData.fullName}/resume`,
          formData.resume
        );
      }
      await update({
        ...formData,
        id: special_id,
        resume: `CANDIDATESDATA/${formData.fullName}`,
      });
      handleCancel();
    } catch (error) {
      console.error("Error updating form data:", error);
    }
  };

  const handleMultiSelectChange = (event, field) => {
    const value = event.target.value; // This should be an array
    setFormData({
      ...formData,
      [field]: value, // Directly use the value, which should already be an array
    });
  };

  const formFields = [
    { id: "fullName", label: "Full Name" },
    { id: "jobProfile", label: "Profile" },
    { id: "age", label: "Age" },
    { id: "address", label: "Address" },
    { id: "whatsappNumber", label: "WhatsApp Number" },
    { id: "qualification", label: "Qualification" },
    { id: "salary", label: "Salary" },
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
                    <MenuItem value={"Manjeet Saharan"}>
                      Manjeet Saharan
                    </MenuItem>
                    <MenuItem value={"Geetika"}>Geetika</MenuItem>
                    <MenuItem value={"Mandeep Kakran"}>Mandeep Kakran</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup
                    row
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl disabled={loggedinuserisnotmanager} fullWidth>
                  <InputLabel id="recruiter-select-label">Recruiter</InputLabel>
                  <Select
                    labelId="recruiter-select-label"
                    id="recruiter"
                    name="recruiter"
                    value={formData.recruiter} // Ensure this is an array
                    label="Recruiter"
                    onChange={(e) => handleMultiSelectChange(e, "recruiter")}
                    multiple
                  >
                    {[
                      "Priya",
                      "Namrita",
                      "Kajal",
                      "Khushi",
                      "Sohani"
                    ].map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          checked={formData.recruiter.indexOf(name) > -1}
                        />
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    id="resume"
                    name="resume"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        resume: e.target.files[0],
                        resumeTouched: false,
                      });
                    }}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="resume">
                    <VisuallyHiddenInput />
                    <Button
                      variant="contained"
                      component="span"
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload Resume
                    </Button>
                  </label>
                </FormControl>
                {formData.resume && !formData.resumeTouched && (
                  <p>
                    Uploaded: {formData.resume.name} (
                    {(formData.resume.size / 1024).toFixed(2)} KB)
                  </p>
                )}
                {formData.resumeTouched && !formData.resume && (
                  <p style={{ color: "red" }}>Resume is required.</p>
                )}
              </Grid>

              {/* <FormGroup> */}
              {user.currentUser.email != "kajal@vrecruiters.in" && (
                <Grid container item spacing={4}>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        Enrollment Status
                      </FormLabel>
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
                        multiline
                        rows={4}
                        value={formData.remarks}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              )}
              {/* </FormGroup> */}

              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  {command === "upload" ? "Submit" : "Update"}
                </Button>
              </Grid>
            </Grid>
          </FormGroup>
        </form>
      </Container>
    </Modal>
  );
};

export default CandidateDataForm;
