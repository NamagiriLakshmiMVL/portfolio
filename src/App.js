import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import Header from "./Header";
import Heading from "./Heading";
import { ReactComponent as React } from "./Assets/React.svg";
import { ReactComponent as HTML } from "./Assets/Html.svg";
import { ReactComponent as CSS } from "./Assets/Css.svg";
import { ReactComponent as Git } from "./Assets/Git.svg";
import { ReactComponent as JavaScript } from "./Assets/Javascript.svg";
import { ReactComponent as Node } from "./Assets/Node.svg";
import { ReactComponent as MySql } from "./Assets/Mysql.svg";
import mui from "./Assets/mui.png";
import mongo from "./Assets/mongo.png";
import problem from "./Assets/problemsolving.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import CodeIcon from "@mui/icons-material/Code";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Money from "./Assets/money.png";
import Todo from "./Assets/Todo.png";
import Store from "./Assets/store.png";
import Bill from "./Assets/bill.png";
import Gmail from "./Assets/gmail.png";

const project = {
  gmailclone: {
    title: "Gmail Clone",
    tags: ["React", "CSS", "Express", "Mongo DB"],
    description: "Gmail Clone with all the details and information",
    backend_code:
      "https://github.com/NamagiriLakshmiMVL/Gmail-Clone-Backend.git",
    frontend_code:
      "https://github.com/NamagiriLakshmiMVL/Gmail-Clone-Frontend.git",
    fe_deployed_link: "https://namagiri-gmail-clone-frontend.netlify.app/",
    backend_deployed_link: "https://backend-jz6x.onrender.com",
    source: Gmail,
  },
  store_management: {
    title: "Store Management",
    tags: ["React", "CSS", "Express", "Mongo DB"],
    description:
      "Store Management is a website developed for selling fruits and vegetables online with all the information included and the bill is also generated",
    backend_code: "https://github.com/NamagiriLakshmiMVL/STORE_MANAGEMENT.git",
    frontend_code:
      "https://github.com/NamagiriLakshmiMVL/STORE_MANAGEMENT_FRONTEND.git",
    fe_deployed_link: "https://namagiri-store-management.netlify.app/",
    backend_deployed_link: "https://store-management-backend-1.onrender.com",
    source: Store,
  },
  moneymanager: {
    title: "Money Manager",
    tags: ["React", "CSS", "Express", "Mongo DB"],
    description:
      "Manager for your expense / expenditure. Record your transactions and Plan Accordingly",
    backend_code:
      "https://github.com/NamagiriLakshmiMVL/Money_Manager_Backend.git",
    frontend_code: "https://github.com/NamagiriLakshmiMVL/Money-Manager.git",
    fe_deployed_link: "https://namagiri-expense-tracker.netlify.app/",
    backend_deployed_link: "https://money-manager-backend-w5nu.onrender.com",
    source: Money,
  },
  todo_app: {
    title: "Todo List",
    tags: ["React", "CSS", "Express", "Mongodb"],
    description: "Todo list is used to manage all your day to day tasks.",
    backend_code: "https://github.com/NamagiriLakshmiMVL/todo_backend.git",
    frontend_code: "https://github.com/NamagiriLakshmiMVL/frontend-todo.git",
    fe_deployed_link: "https://namagiri-todo-react.netlify.app/",
    backend_deployed_link: "https://todo-backend-29pv.onrender.com",
    source: Todo,
  },
  billing_app: {
    title: "Billing App",
    tags: ["React", "CSS", "HTML"],
    description:
      "Billing App to bill the products for each item with price and quantity",
    backend_code: "",
    frontend_code: "https://github.com/NamagiriLakshmiMVL/billing.git",
    fe_deployed_link: "https://namagiribilling.netlify.app/",
    backend_deployed_link: "",
    source: Bill,
  },
};

function App() {
  return (
    <div style={{ backgrounColor: "#aaa" }}>
      <Header />
      <Box
        sx={{
          transform: "skewY(-3deg)",
          marginTop: -10,
          width: "100%",
          backgroundImage: "linear-gradient(45deg, #cdd, #eee)",
        }}
        py={6}
      >
        <Box
          sx={{
            transform: "skewY(3deg)",
            height: "fit-content",
            border: "1px solid #04648A",
            display: "flex",
            borderRadius: "5px",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: 5,
          }}
          my={8}
          mx={{ xs: 3, md: 20, lg: 30 }}
          px={{ xs: 2, md: 9 }}
          py={5}
        >
          <Heading title={"About Me"} description={"My Work"} />
          <Box sx={{ flex: 0.7 }}>
            <Typography>
              I am Namagiri Lakshmi M V L , A Passionate Full Stack Developer
              completed training at Guvi Organization.On my free time I
              develop apps for my ideas on mind and I like to play Musical Instrument - Veena. I have
              a lot of mentors which I learnt from because they are the one that
              made me who I am today. I usually do a lot of things at my free
              time which makes me in love with myself.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          transform: "skewY(-3deg)",
          width: "100%",
          backgroundImage: "linear-gradient(45deg, #333,#555)",
          color: "#fff",
        }}
        py={6}
      >
        <Box
          sx={{
            transform: "skewY(3deg)",
            height: "fit-content",
            border: "1px solid #ffffff",
            display: "flex",
            borderRadius: "5px",
            backgroundColor: "#555",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
          my={8}
          mx={{ xs: 2, md: 20, lg: 30 }}
          px={{ xs: 1, md: 5, lg: 9 }}
          py={5}
        >
          <Heading title={"My Skills"} description={"Tech Stack"} />
          <Box
            sx={{
              flex: 0.7,
              display: "flex",
              gap: 4,
              width: "250px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <React />
              <Typography>React</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <HTML />
              <Typography>HTML</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <CSS />
              <Typography>CSS</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <JavaScript />
              <Typography>JavaScript</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Git />
              <Typography>Git</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Node />
              <Typography>Node JS</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <MySql />
              <Typography>Mysql</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <img src={`${mui}`} alt="ICON" style={{ width: "90px" }} />
              <Typography>Material UI</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <img src={`${mongo}`} alt="ICON" style={{ width: "90px" }} />
              <Typography>MongoDB</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <img src={`${problem}`} alt="ICON" style={{ width: "90px" }} />
              <Typography>Problem Solving</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box p={{ xs: 1, md: 5 }} m={{ xs: 1, md: 3 }} mb={7} id="projects">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            className="heading_middle"
            sx={{ margin: "auto", fontWeight: 600 }}
            variant="h4"
            pt={5}
          >
            My Projects
          </Typography>
          <hr
            style={{
              height: "80px",
              border: "1px solid grey",
              borderRadius: "3px",
              margin: "0 0 30px 0",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
            {Object.values(project).map((ele) => (
              <Box
                sx={{
                  border: "1px solid grey",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  overflow: "hidden",
                  position: "relative",
                }}
                m={1}
              >
                <Typography
                  variant="h7"
                  sx={{ backgroundColor: "grey", color: "#fff", width: "100%" }}
                  p={1}
                >
                  {ele.title}
                </Typography>
                <Box
                  sx={{
                    width: { xs: "280px", md: "350px" },
                    height: { xs: "230px", md: "300px" },
                  }}
                >
                  <img
                    src={ele.source}
                    alt="screenshot of project"
                    style={{
                      backgroundImage: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "inherit",
                      height: "inherit",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    flexWrap: "wrap",
                    alignItems: "center",
                    backgroundColor: "#fff",
                  }}
                  p={1}
                >
                  <a
                    href={ele.frontend_code}
                    alt="deployed link"
                    style={{ textDecoration: "None" }}
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      sx={{
                        color: "#D73F4F",
                        textTransform: "Capitalize",
                        border: "2px solid #D73F4F",
                      }}
                    >
                      <CodeIcon />
                      <span style={{ marginLeft: "7px" }}>FE Code</span>
                    </Button>
                  </a>
                  {ele.backend_code && (
                    <a
                      href={ele.backend_code}
                      alt="deployed link"
                      style={{ textDecoration: "None" }}
                      target="__blank"
                    >
                      <Button
                        sx={{
                          color: "#D73F4F",
                          textTransform: "Capitalize",
                          border: "2px solid #D73F4F",
                        }}
                      >
                        <CodeIcon />
                        <span style={{ marginLeft: "7px" }}>BE Code</span>
                      </Button>
                    </a>
                  )}
                  <a
                    href={ele.fe_deployed_link}
                    alt="deployed link"
                    style={{ textDecoration: "None" }}
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      sx={{
                        color: "#D73F4F",
                        textTransform: "Capitalize",
                        border: "2px solid #D73F4F",
                      }}
                    >
                      <LinkIcon />
                      <span style={{ marginLeft: "7px" }}>Website</span>
                    </Button>
                  </a>
                </Box>
                <Button
                  className="viewmore"
                  sx={{
                    textAlign: "center",
                    backgroundColor: "#D73F4F",
                    color: "#fff",
                    width: "100%",
                    textTransform: "capitalize",
                  }}
                  p={2}
                >
                  View More ^
                </Button>
                <Box
                  className="modal"
                  p={0.2}
                  sx={{
                    backgroundColor: "white",
                    border: {
                      xs: "4px solid #D73F4F",
                      md: "5px solid #D73F4F",
                    },
                  }}
                >
                  <Typography variant="h6">{ele.title}</Typography>
                  <Typography variant="h7" sx={{ textAlign: "left" }} p={1}>
                    {ele.description}
                  </Typography>
                  <Typography
                    variant="h7"
                    sx={{ display: "flex", alignItems: "center" }}
                    py={2}
                  >
                    <LocalOfferIcon />
                    Tags:{" "}
                    <span style={{ paddingLeft: "5px" }}>
                      {ele.tags.join(" , ")}
                    </span>
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box p={5} m={3}>
        <Box
          sx={{
            flex: 0.7,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            className="heading_middle"
            sx={{ margin: "auto", fontWeight: 600 }}
            variant="h4"
            pt={5}
          >
            Contact Me
          </Typography>
          <hr
            style={{
              height: "80px",
              border: "1px solid grey",
              borderRadius: "3px",
              margin: "30px 0",
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: "100px",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid grey",
                borderRadius: "3px",
                boxShadow: "10px 10px 20px #aaa",
                width: "150px",
              }}
              p={5}
            >
              <EmailIcon fontSize="large" />
              <Typography variant="h5" p={1} sx={{ fontWeight: "600" }}>
                Gmail
              </Typography>
              <Typography>namagirimvl@gmail.com</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid grey",
                borderRadius: "3px",
                boxShadow: "10px 10px 20px #aaa",
                width: "150px",
              }}
              p={5}
            >
              <LinkedInIcon fontSize="large" />
              <Typography variant="h5" p={1} sx={{ fontWeight: "600" }}>
                LinkedIn
              </Typography>
              <Typography>
                <a
                  style={{ color: "#111", letterSpacing: 1 }}
                  href="https://www.linkedin.com/in/namagiri-lakshmi-aa5b87262/"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  Linked In
                </a>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid grey",
                borderRadius: "3px",
                boxShadow: "10px 10px 20px #aaa",
                width: "150px",
              }}
              p={5}
            >
              <GitHubIcon fontSize="large" />
              <Typography variant="h5" p={1} sx={{ fontWeight: "600" }}>
                Github
              </Typography>
              <Typography>
                <a
                  style={{ color: "#111", letterSpacing: 1 }}
                  href="https://github.com/NamagiriLakshmiMVL"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          color: "white",
          backgroundImage: "linear-gradient(45deg, #333,#555)",
        }}
        p={2}
        mt={15}
      >
        <Typography
          variant="h7"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {new Date().getFullYear()} - Designed and Developed By - Namagiri
        </Typography>
      </Box>
    </div>
  );
}

export default App;
