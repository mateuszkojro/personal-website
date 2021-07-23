import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Button, Card, Icon } from "semantic-ui-react";
import CustomFooter from "../components/CustomFooter";
import TopBar from "../components/TopBar";

type Article = {
  name: String;
  category: String;
  description: String;
  github: String;
  writeUp?: String;
};

let articles: Array<Article> = [
  {
    name: "Simple NN",
    category: "C++",
    description: "Simple NN writen enitrly from skratch in C++",
    github: `https://github.com/mateuszkojro/neural_network_c-`,
  },
  {
    name: "Markdown transpiler",
    category: "TS",
    description: "Simple Markdown transpiler written in TypeScript",
    github: `https://github.com/mateuszkojro/markdown_parser`,
  },
];

export default function Gallery() {
  return (
    <>
      <TopBar />
      <Card.Group
      centered
        style={{
          marginLeft: "1em",
          marginRight: "1em",
          marginBottom: "1em",
          marginTop: "5em",
        }}
      >
        {articles.map((article) => (
          <Card>
            <Card.Content>
              <Card.Header>{article.name}</Card.Header>
              <Card.Meta>{article.category} </Card.Meta>
              <Card.Description>{article.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button as="a" href={article.github}>
                  <Icon name='github square' />
                  Source Code
                </Button>
                {article.writeUp ? (
                  <Button as="a" href={article.writeUp}>
                    Read More
                  </Button>
                ) : (
                  <></>
                )}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <CustomFooter />
    </>
  );
}
