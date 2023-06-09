import { extendTheme, defineStyleConfig, keyframes } from "@chakra-ui/react"

const pulsation = keyframes`
  0% {
    box-shadow: #811FFF 0 0 0 0;
  }

  100% {
    box-shadow: rgba(150, 92, 245, 0) 0 0 0 15px;
  }
`

const pulsationWhite = keyframes`
  0% {
    box-shadow: #E8D7FF 0 0 0 0;
  }

  100% {
    box-shadow: rgba(150, 92, 245, 0) 0 0 0 15px;
  }
`

const colors = {
  brand: {
    100: "#BF6EFE", // BtnHover top
    200: "#A367EF", // Btn top
    300: "#8F37FF", // BtnHover bottom
    400: "#811FFF", // Btn bottom
    500: "#5C1FAB", // Logo light
    600: "#431480", // Logo - dark
    800: "#7B2FD0",
    900: "#414DED"
  },
  pink: {
    100: "#D3C2E9"
  }
}

const breakpoints = {
  sm: 767,
  md: 959,
  lg: 1247,
  xl: 1439
}

const radii = {
  sm: "12px",
  md: "15px",
  lg: "30px"
}

const zIndices = {
  tooltip: 1300
}

export const gradientBtn = "linear(to-t, brand.400, brand.200)"

export const gradientBtnHover = "linear(to-t, brand.300, brand.100)"

export const gradientCard = "linear(to-t, brand.900, brand.800)"

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontSize: "22px",
    fontWeight: "bold",
    minH: { base: "58px", sm: "72px" },
    color: "white",
    textTransform: "capitalize",
    borderRadius: "sm"
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "18px",
      fontWeight: "600",
      minWidth: "94px",
      minHeight: { base: "44px", sm: "54px" },
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3 // <-- py is short for paddingTop and paddingBottom
    }
  },
  // Two variants: outline and solid
  variants: {
    solid: {
      bgGradient: gradientBtn,
      animation: `1.5s ease 0s infinite normal none running ${pulsation}`,
      _hover: {
        bgGradient: gradientBtnHover,
        _disabled: { bgGradient: gradientBtnHover }
      },
      _active: { bgGradient: gradientBtnHover }
    },
    white: {
      borderColor: "white",
      color: "brand.400",
      bg: "white",
      textTransform: "uppercase",
      animation: `1.5s ease 0s infinite normal none running ${pulsationWhite}`,
      boxShadow:
        "0px 6px 28px rgba(0, 0, 0, 0.05), inset 0px 1px 0px rgba(255, 255, 255, 0.25);",
      _hover: {
        bgGradient: "linear-gradient(180deg, #BF6EFE -6.82%, #8F37FF 93.18%);",
        color: "white"
      }
    },
    third: {
      bgGradient: "linear-gradient(180deg, #FFFFFF 0%, #E8D7FF 100%)",
      boxShadow: "0px 10px 15px rgba(93, 64, 224, 0.15)",
      fontSize: { base: "18px", sm: "22px" },
      animation: `1.5s ease 0s infinite normal none running ${pulsationWhite}`,
      fontWeight: "bold",
      _hover: {
        bgGradient: "linear-gradient(180deg, #FFFFFF 0%, #F4EBFF 100%)"
      },
      _active: {
        bgGradient: "linear-gradient(180deg, #FFFFFF 0%, #F4EBFF 100%)"
      }
    },
    collect: {
      background: "white",
      boxShadow:
        "0px 6px 28px rgba(0, 0, 0, 0.05), inset 0px 1px 0px rgba(255, 255, 255, 0.25)",
      fontSize: { base: "14px", sm: "18px" },
      fontWeight: "bold",
      textTransform: "uppercase",
      animation: `1.5s ease 0s infinite normal none running ${pulsationWhite}`,
      _hover: {
        background: "white"
      },
      _active: {
        background: "white"
      }
    }
  },
  // The default size and variant values
  defaultProps: {
    variant: "solid",
    size: "md"
  }
})

const Input = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {},
  sizes: {
    lg: {
      minH: "72px"
    }
  },
  // Two variants: outline and solid
  variants: {},
  // The default size and variant values
  defaultProps: {}
})

const components = {
  Button,
  Input
}

const theme = extendTheme({ colors, breakpoints, radii, components, zIndices })

export const customScroll = {
  "&::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
    padding: "1px"
  },
  "&::-webkit-scrollbar-track": {
    "border-radius": "4px",
    background: "#F0ECF5"
  },
  "&::-webkit-scrollbar-thumb": {
    width: "6px",
    height: "6px",
    background: "rgba(255,255, 255, 1)",
    "border-radius": "4px",
    border: "1px solid #F0ECF5"
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "green"
  },
  "scrollbar-color": "red",
  "scrollbar-width": "3px",
  "&:hover": {
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(255, 255, 255, 1)"
    }
  }
}

export default theme
