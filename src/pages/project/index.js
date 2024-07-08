import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SingleProject } from "../../components";
import Link from "../../components/link";
import { ThemeContext } from "../../contexts/theme-context";
import { projectsData } from "../../data/projects-data";

function ProjectPage() {
  // const classes = useStyles();
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);

  const filteredArticles = projectsData.filter((project) => {
    const content = project.projectName + project.projectDesc + project.tags;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  const useStyles = makeStyles((t) => ({
    search: {
      color: theme.tertiary,
      width: "40%",
      height: "2.75rem",
      outline: "none",
      border: "none",
      borderRadius: "20px",
      padding: "0.95rem 1rem",
      fontFamily: "'Noto Sans TC', sans-serif",
      fontWeight: 500,
      fontSize: "0.9rem",
      backgroundColor: theme.secondary,
      boxShadow:
        theme.type === "dark"
          ? "inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060"
          : "inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030",
      "&::placeholder": {
        color: theme.tertiary,
      },
      [t.breakpoints.down("sm")]: {
        width: "350px",
      },
    },
    home: {
      color: theme.secondary,
      position: "absolute",
      top: 25,
      left: 25,
      padding: "7px",
      borderRadius: "50%",
      boxSizing: "content-box",
      fontSize: "2rem",
      cursor: "pointer",
      boxShadow:
        theme.type === "dark"
          ? "3px 3px 6px #ffffff40, -3px -3px 6px #00000050"
          : "3px 3px 6px #ffffff40, -3px -3px 6px #00000050",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        color: theme.tertiary,
        transform: "scale(1.1)",
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "1.8rem",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="projectPage " style={{ backgroundColor: theme.secondary }}>
      <div
        className="projectPage-header flex items-center justify-between h-20  px-10 shadow-xl"
        style={{ backgroundColor: theme.primary }}
      >
        <Link href="/" className='h-20 text-2xl'>
          <AiOutlineHome className={classes.home} style={{ fontSize: '2em' }} />

        </Link>

        {/* <div className="projectPage-search align-middle justify-center flex py-8 rounded-md ">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search project..."
            className={`px-4 py-2 rounded-md ${classes.search} text-lg`}
          />
        </div> */}

        <h1 className="text-2xl" style={{ color: theme.secondary }}>Projects</h1>
      </div>
      <div className="projectPage-container">

        <div className="project-container my-8">
          <Grid
            className="project-grid "
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            {filteredArticles.map((project) => (
              <SingleProject
                theme={theme}
                key={project.id}
                id={project.id}
                name={project.projectName}
                desc={project.projectDesc}
                tags={project.tags}
                code={project.code}
                demo={project.demo}
                image={project.image}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
