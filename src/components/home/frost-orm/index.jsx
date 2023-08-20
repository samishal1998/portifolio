import Row from "react-bootstrap/Row";
import React, {useState, useEffect, useCallback} from "react";
import Container from "react-bootstrap/Container";
import {Jumbotron} from "../migration";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

export function FrostOrm() {

    return <>
        <Jumbotron fluid id="frost-orm" className="bg-light m-0">
            <Container className="">
                <h3 className="display-4 pb-5 text-center"><a href={"https://frost-orm.github.io/frost-web-docs/"}>Frost
                    ORM</a></h3>
                <p>
                    Frost ORM is a personal project. It's an ODM Library built for FirebaseDB. it has 2 variations; one
                    with annotations and the other with code generation.
                    To enable a seamless code generation I created a schema language <a
                    href={"https://frost-orm.github.io/frost-web-docs/frost-schema-language"}>(Frost Schema
                    Language)</a> to allow
                    the user to define the schema once and generate the code for different platforms
                </p>
                <Row>
                    <ProjectCard
                        value={
                            {
                                name: "@frost-orm/frost-web-client",
                                npm_id: "@frost-orm/frost-web-client",
                                gh_url: "https://github.com/Frost-ORM/frost-web-client",
                                description:"This the first variation of the library that uses the decorators in TS/JS"
                            }
                        }
                    />
                    <ProjectCard
                        value={
                            {
                                name: "@frost-orm/frost-web",
                                npm_id: "@frost-orm/frost-web",
                                gh_url: "https://github.com/Frost-ORM/frost-web",
                                description:"This the second variation of the library that uses code-generation due to some limitations that come with the decorators in TS/JS"

                            }
                        }
                    />
                    <ProjectCard
                        value={
                            {
                                name: "@frost-orm/cli",
                                npm_id: "@frost-orm/cli",
                                gh_url: "https://github.com/Frost-ORM/frost-parser",
                                description:"This the CLI tool to parse/generate the frost schema file"

                            }
                        }
                    />
                    <ProjectCard
                        value={
                            {
                                name: "frost-schema-syntax-highlighting-vscode",
                                gh_url: "https://github.com/Frost-ORM/frost-schema-syntax-highlighting-vscode",
                                description:"This the VsCode extention for Color Highlighting the Frost Schema Language",

                                extraCardButtons: <>
                                    <CardButtons
                                        url={"https://marketplace.visualstudio.com/items?itemName=frost-orm.frost-schema-syntax-highlighting"}
                                        icon={'fa-puzzle-piece'} label={"VScode Extension"}/>
                                </>
                            }
                        }
                    />
                </Row>
            </Container>
        </Jumbotron>
    </>

}

const ProjectCard = ({value}) => {
    const {
        name,
        description,
        npm_id,
        gh_url,
        extraCardButtons = <></>,
        stargazers_count,
        languages_url,
        pushed_at,
    } = value;
    return (
        <Col md={6}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                    <Card.Title as="h5">{name || <Skeleton/>} </Card.Title>
                    <Card.Text>{(!description) ? "" : description || <Skeleton count={3}/>} </Card.Text>

                    <div style={{display: "flex", flexDirection: "row", gap: 1}}>
                        {npm_id ? <CardButtons url={`https://www.npmjs.com/package/${npm_id}`} icon={'fa-npm'}/> :
                            <Skeleton count={2}/>}
                        {gh_url ? <CardButtons url={gh_url} icon={'fa-github'}/> : <Skeleton count={2}/>}
                        {extraCardButtons}
                    </div>

                    <hr/>

                    {/*{value ? (*/}
                    {/*    <CardFooter star_count={stargazers_count} repo_url={svn_url} pushed_at={pushed_at} />*/}
                    {/*) : (*/}
                    {/*    <Skeleton />*/}
                    {/*)}*/}
                </Card.Body>
            </Card>
        </Col>
    );
};

const CardButtons = ({url, icon = 'fa-github', label = ""}) => {
    return (
        <div className="d-grid gap-2 d-md-block">
            <a href={url} target=" _blank" className="btn btn-outline-secondary mx-2">
                <i className={`fab ${icon}`}/> {label}
            </a>
        </div>
    );
};

const CardFooter = ({star_count, repo_url, pushed_at}) => {
    const [updated_at, setUpdated_at] = useState("0 mints");

    const handleUpdatetime = useCallback(() => {
        const date = new Date(pushed_at);
        const nowdate = new Date();
        const diff = nowdate.getTime() - date.getTime();
        const hours = Math.trunc(diff / 1000 / 60 / 60);

        if (hours < 24) {
            if (hours < 1) return setUpdated_at("just now");
            let measurement = hours === 1 ? "hour" : "hours";
            return setUpdated_at(`${hours.toString()} ${measurement} ago`);
        } else {
            const options = {day: "numeric", month: "long", year: "numeric"};
            const time = new Intl.DateTimeFormat("en-US", options).format(date);
            return setUpdated_at(`on ${time}`);
        }
    }, [pushed_at]);

    useEffect(() => {
        handleUpdatetime();
    }, [handleUpdatetime]);

    return (
        <p className="card-text">
            <a
                href={repo_url + "/stargazers"}
                target=" _blank"
                className="text-dark text-decoration-none"
            >
        <span className="text-dark card-link mr-4">
          <i className="fab fa-github"/> Stars{" "}
            <span className="badge badge-dark">{star_count}</span>
        </span>
            </a>
            <small className="text-muted">Updated {updated_at}</small>
        </p>
    );
};
