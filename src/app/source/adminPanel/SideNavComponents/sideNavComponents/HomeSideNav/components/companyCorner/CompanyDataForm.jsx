import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { useFireBaseDocCrudOperations } from "../../../../../../../components/fireBase/fireBaseHooks/FireBaseDocCrudOperations";

const initialFormData = {
  companyName: "",
  profile: "",
  address: "",
  contact: "",
  hiringStatus: "",
  remarkNotes: "",
  email: "",
};

const CompanyDataForm = ({
  open,
  onClose,
  onAdd,
  className,
  command,
  data,
}) => {
  const [formData, setFormData] = useState(data ? data : initialFormData);

  const [special_id, setSpecialid] = useState(
    command === "update" ? data.id : v4()
  );
  const { set, update } = useFireBaseDocCrudOperations(
    `COMPANYDATA/${special_id}`
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (command === "update") {
      update({ ...formData, id: special_id });
    } else {
      set({ ...formData, id: special_id });
      onAdd(formData); // Ensure this call is after successful set
    }
    handleCancel();
  };

  return (
    <Modal className={`py-0 ${className}`} open={open} onClose={onClose}>
      <Container
        maxWidth="md"
        style={{
          boxShadow: "2px 7px 24px 0px #e7e4e4",
          padding: "50px",
          position: "relative",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        <h2 className="text-center text-3xl font-bold pb-10">
          New Company Registeration Form
        </h2>
        <IconButton
          style={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <TextField
                    id="companyName"
                    label="Company Name"
                    variant="filled"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <TextField
                    id="address"
                    label="Address"
                    variant="filled"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <TextField
                    id="profile"
                    label="Profile"
                    variant="filled"
                    value={formData.profile}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    id="contact"
                    label="Contact"
                    variant="filled"
                    value={formData.contact}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    id="email"
                    label="E-mail"
                    variant="filled"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Hiring Status</FormLabel>
                  <RadioGroup
                    row
                    aria-label="hiringStatus"
                    name="hiringStatus"
                    value={formData.hiringStatus}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="hiring"
                      control={<Radio />}
                      label="Hiring"
                    />
                    <FormControlLabel
                      value="nothiring"
                      control={<Radio />}
                      label="Not Hiring"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    id="remarkNotes"
                    label="Remark Notes"
                    variant="filled"
                    value={formData.remarkNotes}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Button type="submit" variant="contained" color="primary">
                    {command === "update" ? "Update" : "Add"}
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
        </form>
      </Container>
    </Modal>
  );
};

export default CompanyDataForm;
