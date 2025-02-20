import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { Container, IconButton } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import {
  cardselectatom,
  databasecardselectionatom,
  leadscardselectionatom,
} from "../../assests/globalvars/cardatoms";

const GlobalDataGrid = ({
  title,
  rows,
  columns,
  isFullScreen,
  toggleFullScreen, 
  classname,
  adddatafunc,
  getRowId,
  navpath,
}) => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useAtom(cardselectatom);
  const [selectedcarddatabase, setSelectedCarddatabase] = useAtom(
    databasecardselectionatom
  );
  const [leadscard, setLeadscard] = useAtom(leadscardselectionatom);

  const handleFullScreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      if (window.innerWidth < 768) {
        screen.orientation
          .lock("landscape")
          .catch((err) => console.error("Orientation lock failed:", err));
      }
    } else {
      document.exitFullscreen();
      if (window.innerWidth < 768) {
        screen.orientation.unlock();
      }
    }
    toggleFullScreen();
  };

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer className="flex justify-between">
        <IconButton
          onClick={() => {
            setSelectedCard(null);
            setSelectedCarddatabase(null);
            setLeadscard(null);
          }}
          sx={{ mb: 1 }}
        >
          <ArrowBackIcon />
        </IconButton>
        <GridToolbar />
        <div>
          <GridToolbarQuickFilter />
          <button
            className="text-[#1976d2] font-medium text-[14px] h-12 w-24 rounded-md text-md"
            onClick={adddatafunc}
          >
            ADD DATA
          </button>
          <IconButton onClick={handleFullScreenToggle}>
            <FullscreenIcon />
          </IconButton>
        </div>
      </GridToolbarContainer>
    );
  };

  return (
    <Container
      className={`${classname} `}
      sx={{
        height: isFullScreen ? "100vh" : "calc(100vh - 200px)", // Adjust height based on full-screen state
        width: isFullScreen ? "100vw" : "100vw",
        marginBottom: "5%",
        display: "flex",
        flexDirection: "column",
        padding: 0,
        "@media (max-width: 800px)": {
          marginBottom: "10%",
          width: "80%",
        },
      }}
      style={{ position: "relative" }}
    >
      <div style={{ height: "100%", width: "100%", position: "relative" }}>
        <DataGrid
          width={"100vw"}
          rows={rows}
          columns={columns}
          getRowId={getRowId ? getRowId : null}
          disableColumnSelector
          disableDensitySelector
          slots={{ toolbar: CustomToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </div>
    </Container>
  );
};

export default GlobalDataGrid;
