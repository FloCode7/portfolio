import React from "react";
import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import {
  Container,
  Wrapper,
  Title,
  Image,
  Date,
  Tags,
  Tag,
  Desc,
  Label,
  Members,
  Member,
  MemberImage,
  MemberName,
  ButtonGroup,
  Button,
} from "./ProjectDetailsStyle";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project?.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          {project.member && (
            <>
              <Label>Membres</Label>
              <Members>
                {project?.member.map((member) => (
                  <Member>
                    <MemberImage src={member.img} />
                    <MemberName>{member.name}</MemberName>
                    <a
                      href={member.github}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <GitHub />
                    </a>
                    <a
                      href={member.linkedin}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <LinkedIn />
                    </a>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button dull href={project?.github} target="new">
              Voir code
            </Button>
            <Button href={project?.webapp} target="new">
              Voir démo
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;
