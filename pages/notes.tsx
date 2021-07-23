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
        name: "Derivatives",
        category: "Jupyter Notebook",
        description: "Notes while learning derivatives",
        github: "https://github.com/mateuszkojro/calculus",
        writeUp: `show_notebook.html?notebook=https://raw.githubusercontent.com/mateuszkojro/calculus/master/Derivatives.ipynb&title=Derivatives`,
    },
    {
        name: "Integrals",
        category: "Jupyter Notebook",
        description: "Notes while lerning integrals",
        github: "https://github.com/mateuszkojro/calculus",
        writeUp: `show_notebook.html?notebook=https://raw.githubusercontent.com/mateuszkojro/calculus/master/Integrals.ipynb&title=Integrals`,
    },
    {
        name: "Quantum basics",
        category: "Jupyter Notebook",
        description: "Intro notes about quantum computers",
        github: `https://github.com/mateuszkojro/quantum`,
        writeUp: "show_notebook.html?notebook=https://raw.githubusercontent.com/mateuszkojro/quantum/main/basics.ipynb&title=Quantum Basics",
    },
];

export default function Notes() {
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
