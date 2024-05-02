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
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    .min(10, "text content should havea minimum of 10 characters ")
    .required("text content is required"),
});

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      image: "",
    },

    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, actions) => {
      updatePost(values);
      actions.resetForm();
    },
  });

  //show post by Id
  const singlePostById = async () => {
    try {
      const { data } = await axios.get(`/api/post/${id}`);
      setFieldValue("title", data.posts.title);
      setFieldValue("prince", data.posts.prince);
      setFieldValue("princess", data.posts.princess);
      setFieldValue("content", data.posts.content);
      setFieldValue("image", data.posts.image.url);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    singlePostById();
    // eslint-disable-next-line
  }, []);

  const updatePost = async (values) => {
    try {
      const { data } = await axios.put(`/api/update/post/${id}`, values);
      if (data.success === true) {
        toast.success("movie updated");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <>
      <Box sx={{ bgcolor: "white", padding: "20px 200px" }}>
        <Typography variant="h5" sx={{ pb: 4 }}>
          {" "}
          Edit movie{" "}
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
            label="princess name"
            name="princess"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="princess name"
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
              onChange={(e) => {
                setFieldValue("content", e);
                return e;
              }}
            />
            <Box
              component="span"
              sx={{ color: "#d32f2f", fontSize: "12px", pl: 2 }}
            >
              {touched.content && errors.content}
            </Box>
          </Box>

          <Box border="2px dashed blue" sx={{ p: 1 }}>
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              //maxFiles={3}
              onDrop={(acceptedFiles) =>
                acceptedFiles.map((file, index) => {
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onloadend = () => {
                    setFieldValue("image", reader.result);
                  };
                })
              }
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
                  <input name="image" {...getInputProps()} />
                  {isDragActive ? (
                    <>
                      <p style={{ textAlign: "center" }}>
                        <CloudUploadIcon
                          sx={{ color: "primary.main", mr: 2 }}
                        />
                      </p>
                      <p style={{ textAlign: "center", fontSize: "12px" }}>
                        {" "}
                        Drop here!
                      </p>
                    </>
                  ) : values.image === null ? (
                    <>
                      <p style={{ textAlign: "center" }}>
                        <CloudUploadIcon
                          sx={{ color: "primary.main", mr: 2 }}
                        />
                      </p>
                      <p style={{ textAlign: "center", fontSize: "12px" }}>
                        Drag and Drop image here or click to choose
                      </p>
                    </>
                  ) : (
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <img
                            style={{ maxWidth: "100px" }}
                            src={values.image}
                            alt=""
                          />
                        </Box>
                      </Box>
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
            Update movie
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditPost;
