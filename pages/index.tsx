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
      <div style={{paddingTop: "5em"}} />
      <Segment style={{ padding: "2em" }} vertical>
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

      <Segment style={{ padding: "2em" }} vertical>
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

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Case Studies</a>
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          Article
        </Header>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{article}</ReactMarkdown>
        <Button
          as="a"
          size="large"
          onClick={() => {
            getReadme(
              `https://raw.githubusercontent.com/mateuszkojro/video_player/master/README.md`
            );
          }}
        >
          Read More
        </Button>
        {/* </Container> */}
      </Segment>
      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "Some text"
              </Header>
              <p style={{ fontSize: "1.33em" }}>subtext</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "Some text"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                {/* <Image avatar src='/images/avatar/large/nan.jpg' /> */}
                subtext
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <CustomFooter />
    </div>
  );
}
