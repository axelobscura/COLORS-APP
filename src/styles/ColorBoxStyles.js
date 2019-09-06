import chroma from 'chroma-js';
export default {
  ColorBox: {
    width: "20%",
    height: props => props.showingFullPalette ? "25%" : "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button":{
      opacity: 1
    }
  },
  copyText: {
    color: props => chroma(props.background).luminance() >= 0.7 ? "black":"white"
  },
  colorName: {
    color: props => chroma(props.background).luminance() <= 0.8 ? "white":"black"
  },
  seeMore: {
    color: props => chroma(props.background).luminance() >= 0.7 ? "black":"white",
    background: "rgba(255,255,255,0.3)",
    position: "absolute",
    border:"none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
  },
  copyButton: {
    color: props => chroma(props.background).luminance() >= 0.7 ? "black":"white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255,255,255,0.5)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border:"none",
    textDecoration: "none",
    opacity: 0
  },
  boxcontent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  }
}