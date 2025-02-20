import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/system";
import ImageCarousel from "./imageCarousel/ImageCarousel";
import pic from "../../../../../app/assests/images/avt.jpg";

const testimonials = [
  {
    image: pic,
    alt: "Shikha",
    name: "Shikha",
    occupation: "Business Development Executive",
    company: "Teleperformance",
    ctc: "30000 Per month",
  },
  {
    image: pic,
    alt: "Jaswinder Kaur",
    name: "Jaswinder Kaur",
    occupation: "Telesales",
    company: "RG Malwa Group",
    ctc: "20000 Per month",
  },
  {
    image: pic,
    alt: "Sahil",
    name: "Sahil",
    occupation: "Marketing",
    company: "V Recruiter",
    ctc: "18000 Per month",
  },
  {
    image: pic,
    alt: "Abhishek",
    name: "Abhishek",
    occupation: "Marketing and Sales",
    company: "BioTrack International",
    ctc: "20000 Per month",
  },
  {
    image: pic,
    alt: "Rishab",
    name: "Rishab",
    occupation: "Field Sales ",
    company: "Jaimala Buildtech",
    ctc: "15000 Per month",
  },
  {
    image: pic,
    alt: "Anshul",
    name: "Anshul",
    occupation: "Field Sales",
    company: "Jaimala Buildtech",
    ctc: "15000 Per month",
  },
  {
    image: pic,
    alt: "Geetanjali",
    name: "Geetanjali",
    occupation: "Social Media Marketing ",
    company: "Jaimala Buildtech",
    ctc: "20000 Per month",
  },
  {
    image: pic,
    alt: "Uma Devi",
    name: "Uma Devi",
    occupation: "HR",
    company: "Sri Chaitnya",
    ctc: "18000 Per month",
  },
  {
    image: pic,
    alt: "Asma",
    name: "Asma",
    occupation: "Reception",
    company: "Sushma",
    ctc: "15000 Per month",
  },
  {
    image: pic,
    alt: "Naveet Kaur",
    name: "Naveet Kaur",
    occupation: "Email",
    company: "Heaves Group",
    ctc: "18000 Per month",
  },

  {
    image: pic,
    alt: "Malika Tripathi",
    name: "Malika Tripathi",
    occupation: "Telesales",
    company: "BioTrack International",
    ctc: "15000 Per month",
  },
  {
    image: pic,
    alt: "Jatinder Singh",
    name: "Jatinder Singh",
    occupation: "Batch Cordinator",
    company: "Sri Chaitnya ",
    ctc: "20000 Per month",
  },
  {
    image: pic,
    alt: "Manish Kumar",
    name: "Manish Kumar",
    occupation: "Telecaller",
    company: "Sri Chaitnya ",
    ctc: "18000 Per month",
  },
  {
    image: pic,
    alt: "Neeraj Kumar",
    name: "Neeraj Kumar",
    occupation: "Sales Trainee",
    company: "Noble Calista",
    ctc: "20000 Per month",
  },
  {
    image: pic,
    alt: "Jashanpreet",
    name: "Jashanpreet",
    occupation: "Sales Trainee",
    company: "Noble Calista",
    ctc: "20000 Per month",
  },
  {
    image: pic,
    alt: "Simran",
    name: "Simran",
    occupation: "Front Office",
    company: "Noble Calista",
    ctc: "30000 Per month",
  },
  {
    image: pic,
    alt: "Akanksha",
    name: "Akanksha",
    occupation: "Telesales",
    company: "Noble Calista",
    ctc: "25000 Per month",
  },
  {
    image: pic,
    alt: "Saloni",
    name: "Saloni",
    occupation: "Sales Trainee",
    company: "Noble Calista",
    ctc: "20000 Per month",
  },
  {
    image: pic,
    alt: "Poonam",
    name: "Poonam",
    occupation: "Business Development Executive",
    company: "Axis Bank",
    ctc: "20000 Per month",
  },
  {
    image: pic,
    alt: "Abhishek",
    name: "Abhishek",
    occupation: "Business Development Executive",
    company: "Axis Bank",
    ctc: "30000 Per month",
  },
];

const whiteLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg",
];

const darkLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg",
];

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};

export default function UserTestimonial() {
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  return (
    <>
      <Box
        id="testimonials"
        sx={(theme) => ({
          py: { xs: 8, sm: 7 },
          color: "text.primary",
          ...theme.applyStyles("dark", {
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, hsla(210, 100%, 16%, 0),transparent",
          }),
        })}
      >
        <Container
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 3, sm: 6 },
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            sx={{ color: "text.light", fontWeight: "bold" }}
            className="max-md:px-7 text-center"
          >
            Hired Candidates
          </Typography>
          <ImageCarousel
            items={testimonials}
            type={"testimonials"}
            whiteLogos={whiteLogos}
            darkLogos={darkLogos}
            logos={logos}
            logoStyle={logoStyle}
          />
        </Container>
      </Box>
    </>
  );
}
