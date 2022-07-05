import { useState } from "react";

import { IoMdArrowDropright } from "react-icons/io";

import {
  Button,
  Content,
  JobTitle,
  Container,
  JobPeriod,
  ButtonList,
  JobContent,
  JobsContent,
  JobContainer,
  HighlightTitle,
  JobDescription,
} from "./styles";

export function Worked() {
  const [jobSelected, setJobSelected] = useState(1);

  return (
    <Container>
      <Content>
        <HighlightTitle>where i`ve worked</HighlightTitle>
        <JobsContent>
          <ButtonList>
            <Button
              type='button'
              onClick={() => setJobSelected(1)}
              selected={jobSelected === 1}
            >
              Cox Automotive Inc.
            </Button>
            <Button
              type='button'
              onClick={() => setJobSelected(2)}
              selected={jobSelected === 2}
            >
              Santander Tecnologia
            </Button>
          </ButtonList>

          <JobContainer>
            <JobContent show={jobSelected === 1}>
              <JobTitle>
                Software Engineer <span>@Cox Automotive Inc.</span>
              </JobTitle>

              <JobPeriod>Abr 2020 - Present</JobPeriod>

              <JobDescription>
                <li>
                  <IoMdArrowDropright />
                  <p></p>
                </li>
              </JobDescription>
            </JobContent>

            <JobContent show={jobSelected === 2}>
              <JobTitle>
                Software Developer <span>@Santander Tecnologia</span>
              </JobTitle>

              <JobPeriod>Jan 2018 - Abr 2020</JobPeriod>

              <JobDescription>
                <li>
                  <IoMdArrowDropright />
                  <p></p>
                </li>
              </JobDescription>
            </JobContent>
          </JobContainer>
        </JobsContent>
      </Content>
    </Container>
  );
}
