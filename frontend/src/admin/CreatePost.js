import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules } from "../components/moduleToolbar";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  title: yup
    .string("Add a Movie name")
    .min(4, "movine name should have a minimum of 4 characters")
    .required("Movie name is required"),
  prince: yup
    .string("Add a prince name")
    .min(4, "Prince name should have a minimum of 4 characters")
    .required("Prince name is required"),
  princess: yup
    .string("Add a princess name")
    .min(4, "Princess name should have a minimum of 4 characters")
    .required("Princess name is required"),
  content: yup
    .string("Add text content")
    .min(10, "Text content should have a minimum of 10 characters")
    .required("Text content is required"),
});

const CreatePost = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: "",
      prince: "",
      princess: "",
      content: "",
      image: null,
    },

    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      createNewPost(values);
      actions.resetForm();
    },
  });
  const navigate = useNavigate();
  //  const [redirect, setRedirect] = useState(false);
  const createNewPost = async (values) => {
    try {
      await axios.post("/api/post/create", values, {
        headers: {
          api_secret: "Srfjo0LEWz_F6QvykXnIfhptS9w",
        },
      });
      toast.success("Movie created successfully");
      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create Movie");
    }
  };

  return (
    <>
      <Box sx={{ bgcolor: "white", padding: "20px 200px" }}>
        <Typography variant="h5" sx={{ pb: 4 }}>
          Create Movie
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="title"
            label="Movie name"
            name="title"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Movie name"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="prince"
            label="Prince name"
            name="prince"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Prince name"
            value={values.prince}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.prince && Boolean(errors.prince)}
            helperText={touched.prince && errors.prince}
          />

          <TextField
            sx={{ mb: 3 }}
            fullWidth
            id="princess"
            label="Princess name"
            name="princess"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Princess name"
            value={values.princess}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.princess && Boolean(errors.princess)}
            helperText={touched.princess && errors.princess}
          />

          <Box sx={{ mb: 3 }}>
            <ReactQuill
              theme="snow"
              placeholder={"About movie story..."}
              modules={modules}
              value={values.content}
              onChange={(content) => setFieldValue("content", content)}
            />
            {touched.content && errors.content && (
              <Box sx={{ color: "#d32f2f", fontSize: "12px", pl: 2 }}>
                {errors.content}
              </Box>
            )}
          </Box>

          <Box border="2px dashed blue" sx={{ p: 1 }}>
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) => {
                const file = acceptedFiles[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  setImagePreview(reader.result);
                  setFieldValue("image", reader.result);
                };
              }}
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <Box
                  {...getRootProps()}
                  p="1rem"
                  sx={{
                    "&:hover": { cursor: "pointer" },
                    bgcolor: isDragActive ? "#cceffc" : "#fafafa",
                  }}
                >
                  <input name="banner" {...getInputProps()} />
                  {isDragActive ? (
                    <>
                      <CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} />
                      <Typography variant="body2" align="center">
                        Drop here!
                      </Typography>
                    </>
                  ) : imagePreview ? (
                    <img
                      style={{ maxWidth: "100px" }}
                      src={imagePreview}
                      alt="Uploaded preview"
                    />
                  ) : (
                    <>
                      <CloudUploadIcon sx={{ color: "primary.main", mr: 2 }} />
                      <Typography variant="body2" align="center">
                        Drag and Drop here or click to choose
                      </Typography>
                    </>
                  )}
                </Box>
              )}
            </Dropzone>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            elevation={0}
            sx={{ mt: 3, p: 1, mb: 2, borderRadius: "25px" }}
          >
            Create movie
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreatePost;
