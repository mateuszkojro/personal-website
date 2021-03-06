import {
  Button,
  Divider,
  Image,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import CustomFooter from "../components/CustomFooter";
import TopBar from "../components/TopBar";

export default function Home() {
  let [article, changeArticle] = useState("");
  const getReadme = (url: string) => {
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.text();
      })
      .then((text) => {
        console.log(text.toString());
        changeArticle(text);
      });
  };

  const buttonStyle = {
    marginTop: "0.5em",
  };

  return (
    <div>
      <TopBar />
      <div style={{ paddingTop: "5em" }} />
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Segment style={{ padding: "2em", marginLeft: "1em", marginRight: "1em", maxWidth: 1024 }} >
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as="h1" style={{ fontSize: "5em" }}>
                    Hi!
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    My name is Mateusz, I am a software engineer studying Physics
                    and Computer Science at Univeristy of Lodz in Poland
                  </p>
                </Grid.Column>
                <Grid.Column floated="left" width={8}>
                  <Image
                    bordered
                    rounded
                    alt="Github profile statistics"
                    size="large"
                    layout="fill"
                    as="a"
                    href="https://github.com/mateuszkojro"
                    src={`http://github-readme-streak-stats.herokuapp.com?user=mateuszkojro`}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button
                    icon
                    style={buttonStyle}
                    labelPosition="left"
                    as="a"
                    href="/Mateusz_Kojro_CV_en.pdf"
                    size="huge"
                  >
                    <Icon name="file" />
                    My CV
                  </Button>
                  <Button
                    icon
                    style={buttonStyle}
                    labelPosition="left"
                    size="huge"
                    as="a"
                    href="/gallery"
                  >
                    <Icon name="images outline" />
                    Projects Gallery
                  </Button>
                  <Button
                    icon
                    style={buttonStyle}
                    labelPosition="left"
                    size="huge"
                    as="a"
                    href="https://github.com/mateuszkojro"
                  >
                    <Icon name="github square" />
                    Check out my code!
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment color='black' style={{ padding: "2em", marginLeft: "1em", marginRight: "1em", maxWidth: 1024 }}>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column>
                  <Icon name="add to calendar" size="massive" />
                </Grid.Column>
                <Grid.Column floated="right" width={8}>
                  {/* <Container text> */}
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    My notes
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Jupyter notebooks containng writeups created while learning new
                    subjects.{" "}
                  </p>
                  <Button as="a" size="large" href="/notes">
                    Notes
                  </Button>
                  {/* </Container> */}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment color='black' style={{ padding: "2em", marginLeft: "1em", marginRight: "1em", maxWidth: 1024 }}>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column floated="left" width={8}>
                  {/* <Container text> */}
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Github
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    All of my code is on Github
                  </p>
                  <Button as="a" size="large" href="https://github.com/mateuszkojro">
                    Github
                  </Button>
                  {/* </Container> */}
                </Grid.Column>
                <Grid.Column only="computer tablet" floated="left">
                  <Icon name="github" size="massive" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment color='black' style={{ padding: "2em", marginLeft: "1em", marginRight: "1em", maxWidth: 1024 }}>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column only="computer tablet">
                  <Icon name="file alternate" size="massive" />
                </Grid.Column>
                <Grid.Column floated="right" width={8}>
                  {/* <Container text> */}
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    CV
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Here you can download my CV.{" "}
                  </p>
                  <Button as="a" size="large" href="/Mateusz_Kojro_CV_en.pdf">
                    Downlad CV
                  </Button>
                  {/* </Container> */}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Row >
      </Grid>


      {/* <CustomFooter /> */}
    </div>
  );
}
