const scrollToSection = (sectionId) => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    const offset = 128;
    window.scrollTo({
      top: sectionElement.offsetTop - offset,
      behavior: "smooth",
    });
  }
};

export default scrollToSection;
