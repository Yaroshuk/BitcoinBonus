import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react"
import React from "react"

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
      <ModalOverlay
        background={
          "linear-gradient(180deg, rgba(73, 22, 129, 0.9) 0%, rgba(0, 9, 136, 0.9) 100%)"
        }
        backdropFilter={"blur(2px)"}
      />
      <ModalContent
        margin={{ base: "10px", sm: "16" }}
        background={"#F0ECF5"}
        borderRadius={"lg"}
      >
        <ModalBody padding={{ base: "6px", md: "30px" }}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CustomModal
