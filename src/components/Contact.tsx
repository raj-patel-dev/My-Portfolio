"use client";

import {
  Button,
  Column,
  Heading,
  Row,
  Text,
  Icon,
} from "@once-ui-system/core";

export const Contact: React.FC<
  React.ComponentProps<typeof Column>
> = ({ ...flex }) => {
  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Column maxWidth="s" horizontal="center" align="center" gap="m">
        <Text
          variant="label-strong-m"
          onBackground="brand-strong"
        >
          WORK WITH ME
        </Text>

        <Heading
          variant="display-strong-m"
          align="center"
        >
          Let&apos;s build something together.
        </Heading>

        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          align="center"
          wrap="balance"
        >
          I&apos;m an entry-level React / TypeScript / Node.js developer in
          Ahmedabad with MERN-stack internship experience. If you
          have a role, project, or idea, I&apos;d like to hear from you.
        </Text>

        <Row
          gap="12"
          wrap
          horizontal="center"
          marginTop="m"
        >
          <Button
            href="mailto:praj212004@gmail.com"
            variant="primary"
            size="m"
            prefixIcon="email"
          >
            Get in touch
          </Button>

          <Button
            href="https://github.com/raj-patel-dev"
            target="_blank"
            variant="secondary"
            size="m"
            prefixIcon="github"
          >
            GitHub
          </Button>

          <Button
            href="https://www.linkedin.com/in/raj-patel21/"
            target="_blank"
            variant="secondary"
            size="m"
            prefixIcon="linkedin"
          >
            LinkedIn
          </Button>
        </Row>

        <Row
          gap="8"
          vertical="center"
          horizontal="center"
          marginTop="s"
        >
          <Icon name="check" size="s" />

          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
          >
            Available for entry-level Java / Spring Boot roles in
            Ahmedabad, Gujarat, and India
          </Text>
        </Row>
      </Column>
    </Column>
  );
};