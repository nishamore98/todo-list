import React from 'react';
import { Modal, Button, Box } from '@mui/material';

const ModalUi = (props) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <>
      <Modal open={props.modal} onClose={props.handleClose}>
        <Box sx={{ ...style, width: 200 }} className="wrapper updateModal">
          <input
            className="updateField inputField"
            value={props.updatedData}
            onChange={(e) => props.handleUpdateEditedText(e.target.value)}
          />
          <Button
            variant="outlined"
            className="updateBtn"
            onClick={() => props.updateItem()}
          >
            Update
          </Button>
        </Box>
      </Modal>
    </>
  );
};
export default ModalUi;
