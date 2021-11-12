import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

import Blog from "../Blog/Blog";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  useEffect(() => {
    fetch("https://mighty-bastion-35979.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data)
        setIsLoading(false)
      });
  }, []);
  return (
    <>
    <Container sx={{ py: 5 }}>
      <Typography
        sx={{ textAlign: "center", mb: 5, color: '#444444' }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Latest Blogs
      </Typography>
      {isLoading ? (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <CircularProgress></CircularProgress>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            columns={{ xs: 4, sm: 8, md: 12 }}
            justify="center"
          >
            {blogs?.map((blog, index) => (
              <Blog blog={blog} key={index} />
            ))}
          </Grid>
        </Box>
      )}
    </Container>
   
    </>
  );
};

export default Blogs;
