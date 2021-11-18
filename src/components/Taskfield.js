import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ModalUi from './Modal';
import { Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  addData,
  deleteItem,
  editItem,
  updateEditedText,
  updateItem,
  closeModal,
  deleteAll,
  check,
} from '../Actions/index';

export default function Taskfield() {
  const data = useSelector((state) => state.toDoReducer);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState('');

  const _addData = () => {
    if (inputData !== 0) {
      dispatch(
        addData({
          text: inputData,
          isChecked: false,
        })
      );
      setInputData('');
    }
  };

  const _deleteItem = (index) => {
    dispatch(deleteItem(index));
  };
  const _editItem = (index) => {
    dispatch(editItem(index));
  };

  const _deleteAll = () => {
    dispatch(deleteAll());
  };
  const _check = (idx) => {
    dispatch(check(idx));
  };
  const handleClose = () => {
    dispatch(closeModal());
  };
  const handleUpdateEditedText = (text) => {
    dispatch(updateEditedText(text));
  };
  const handleUpdateItem = () => {
    dispatch(updateItem());
  };

  return (
    <>
      <div className="container">
        <div className="wrapper inputWrapper">
          <div>
            <input
              placeholder="write your task here"
              className="inputField"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {/* Add Icon */}
            <svg
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 addIcon"
              onClick={_addData}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>
        <div>
          <>
            <Container>
              <Row className="containerWrapper">
                {data?.listData.map((item, index) => {
                  console.log(data.isChecked);
                  return (
                    <Col
                      className="wrapper list-item"
                      md={3}
                      key={index}
                      style={{
                        background: item.isChecked ? '#fff9cf' : 'none',
                      }}
                    >
                      <Checkbox
                        className="mb-3"
                        onClick={() => _check(index)}
                      ></Checkbox>
                      <p
                        style={{
                          textDecoration: item.isChecked
                            ? 'line-through'
                            : 'none',
                        }}
                      >
                        {item.text}
                      </p>
                      {/* Edit Icon */}
                      <svg
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="editBtn h-6 w-6"
                        onClick={() => _editItem(index)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      {/* Delete Icon */}
                      <svg
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="deleteBtn h-6 w-6"
                        onClick={() => _deleteItem(index)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      {
                        (console.log(data?.modal),
                        data?.modal
                          ? ModalUi({
                              modal: data.modal,
                              handleClose,
                              updatedData: data.updateData,
                              handleUpdateEditedText,
                              updateItem: handleUpdateItem,
                            })
                          : '')
                      }
                    </Col>
                  );
                })}
              </Row>
            </Container>
            {data?.listData?.length !== 0 ? (
              <button
                variant="outline-warning"
                onClick={_deleteAll}
                className="deleteAllBtn wrapper"
              >
                Remove all Todos
              </button>
            ) : (
              ''
            )}
          </>
        </div>
      </div>
    </>
  );
}
