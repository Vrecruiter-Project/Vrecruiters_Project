import {
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  Modal,
  styled,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import { useFireBaseStorageCrudOperations } from "../../../../../../../components/fireBase/fireBaseHooks/FireBaseStorageCrudOperatuons";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

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

function useFetchResumeDownloadURL() {
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

  return { getDownloadUrl };
}

function EmployeeDocsUpload({
  open,
  onClose,
  onAdd,
  className,
  filledFormData,
  sendbackdata,
  command,
  updatedata,
}) {
  const [docs, setDocs] = useState([]);
  const { upload, uploadProgress, remove } =
    useFireBaseStorageCrudOperations(``);
  const { getDownloadUrl } = useFetchResumeDownloadURL();

  const onAddDocs = () => {
    setDocs((prevDocs) => [
      ...prevDocs,
      { name: `Doc ${prevDocs.length + 1}`, file: null },
    ]);
  };

  useEffect(() => {
    if (updatedata && updatedata.documents) {
      setDocs(updatedata.documents);
      if (command === "update") {
        const fetchData = async () => {
          const updatedDataList = await Promise.all(
            updatedata.documents.map(async (item) => ({
              ...item,
              doc: await getDownloadUrl(item.docpath),
            }))
          );
          console.log("updatedDataList =====", updatedDataList);
          setDocs(updatedDataList);
        };
        fetchData();
      }
    }
  }, [command, updatedata]);

  const handleDocChange = (index, key, value) => {
    setDocs((prevDocs) => {
      const newDocs = [...prevDocs];
      newDocs[index][key] = value;
      return newDocs;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (command === "upload") {
      try {
        const uploadPromises = docs.map((doc, index) =>
          upload(
            `EMPLOYEEDATA/${filledFormData.fullName}/${doc.name}`,
            doc.file
          )
        );

        await Promise.all(uploadPromises);

        const doclist = docs.map((doc) => ({
          name: doc.name,
          docpath: `EMPLOYEEDATA/${filledFormData.fullName}/${doc.name}`,
        }));

        console.log("All Files Uploaded");
        console.log("doclist ----", doclist);
        sendbackdata(doclist);
        onClose();
      } catch (err) {
        console.log("Error Occurred --- ", err);
      }
    } else {
      console.log(docs);
    }
  };

  return (
    <Modal className={` ${className}`} open={open} onClose={onClose}>
      <Container
        className="relative"
        maxWidth="md"
        sx={{
          boxShadow: "2px 7px 24px 0px #e7e4e4",
          p: 6,
          position: "relative",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="w-full flex justify-between">
            <Grid className="top-[0] left-[0]" item xs={12} sm={6}>
              <FormControl fullWidth>
                <Button variant="contained" color="primary" onClick={onAddDocs}>
                  Add
                </Button>
              </FormControl>
            </Grid>
            <h2 className="text-center text-3xl font-bold pb-10">
              Employee Onboarding Form
            </h2>
            <IconButton
              sx={{ position: "absolute", top: "10px", right: "10px" }}
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="space-y-4">
            {command === "upload" &&
              docs.map((doc, index) => (
                <Grid
                  className="flex justify-center items-center space-x-10"
                  item
                  xs={12}
                  sm={6}
                  key={index}
                >
                  <FormControl style={{ flex: 1, width: "50%" }}>
                    <TextField
                      placeholder="File Name"
                      variant="filled"
                      label={doc.name}
                      fullWidth
                      value={doc.name}
                      onChange={(e) =>
                        handleDocChange(index, "name", e.target.value)
                      }
                    />
                  </FormControl>
                  <FormControl
                    style={{ flex: 1, width: "50%", height: "100%" }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "hsl(231, 100%, 50%,.5)",
                      }}
                      component="label"
                      variant="contained"
                    >
                      Upload File
                      <VisuallyHiddenInput
                        type="file"
                        onChange={(e) =>
                          handleDocChange(index, "file", e.target.files[0])
                        }
                      />
                    </Button>
                  </FormControl>
                </Grid>
              ))}

            {command === "update" &&
              docs.map((doc, index) => (
                <Grid
                  className="flex justify-center items-center space-x-10"
                  item
                  xs={12}
                  sm={6}
                  key={index}
                >
                  <FormControl style={{ flex: 1, width: "50%" }}>
                    <TextField
                      placeholder="File Name"
                      variant="filled"
                      label={doc.name}
                      fullWidth
                      value={doc.name}
                      onChange={(e) =>
                        handleDocChange(index, "name", e.target.value)
                      }
                    />
                  </FormControl>
                  <FormControl
                    style={{ flex: 1, width: "20%", height: "100%" }}
                  >
                    <Button
                      href={docs.doc}
                      sx={{
                        backgroundColor: "hsl(231, 100%, 50%,.5)",
                      }}
                      component="a"
                      variant="contained"
                      target="_blank"
                    >
                      Download
                    </Button>
                  </FormControl>
                  <FormControl
                    style={{ flex: 1, width: "20%", height: "100%" }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "hsl(231, 100%, 50%,.5)",
                      }}
                      component="label"
                      variant="contained"
                    >
                      Update
                    </Button>
                  </FormControl>
                  <FormControl
                    style={{ flex: 1, width: "20%", height: "100%" }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "hsl(231, 100%, 50%,.5)",
                      }}
                      component="label"
                      variant="contained"
                    >
                      Delete
                    </Button>
                  </FormControl>
                </Grid>
              ))}
          </div>

          <div className="absolute bottom-0 right-0">
            <Button type="submit" variant="contained" color="primary">
              Upload Data
            </Button>
          </div>
        </form>
      </Container>
    </Modal>
  );
}

export default EmployeeDocsUpload;
