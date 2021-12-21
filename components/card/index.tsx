import styled from "styled-components";
import Link from "next/link";
import { ExpansiveButton } from "../button";
import { StyledBorderedCardTitle, StyledCardTitle, ThemeName } from "../index";

interface BasicCardProps {
  id: string;
  title: string;
  imageUrl?: string;
  gist: string;
}
type ClickableProps = BasicCardProps & {
  url: string;
  theme: ThemeName;
};

type CardProps = ClickableProps & {
  collapsible?: boolean;
  collapsed?: boolean;
  details?: string;
};

const StyledIcon = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-left: 16px;
  margin-bottom: 8px;
  line-height: 0;
  padding: 4px;
`;

const BasicCardWrapper = styled.div`
  padding: 8px;
  max-width: 300px;
  min-width: 200px;
  overflow: auto;

  & p {
    padding-left: 16px;
  }
`;

export function BasicWithIcon({ id, title, imageUrl, gist }: BasicCardProps) {
  return (
    <BasicCardWrapper id={`basic-card-${id}`} data-cy-id={`basic-card-${id}`}>
      {imageUrl ? <StyledIcon src={imageUrl} /> : <></>}
      <StyledBorderedCardTitle>{title}</StyledBorderedCardTitle>
      <p>{gist}</p>
    </BasicCardWrapper>
  );
}

const ClickableWrapper = styled.a`
  display: block;
  padding: 24px 32px;
  max-width: 500px;
  min-width: 250px;
  border: ${(props) =>
    props.theme === "dark"
      ? "0.1px solid var(--color-gray-500)"
      : "0.1px solid var(--color-gray-300)"};
  border-radius: 8px;

  &:focus,
  &:hover {
    border: ${(props) =>
      props.theme === "dark"
        ? "0.1px solid var(--color-gray-300)"
        : "0.1px solid var(--color-gray-500)"};
  }
`;

export function Clickable({ id, title, gist, url, theme }: ClickableProps) {
  return (
    <Link href={url}>
      <ClickableWrapper
        id={"clickable-card-${id}"}
        data-cy-id={`clickable-card-${id}`}
        theme={theme}
      >
        <StyledCardTitle>{title}</StyledCardTitle>
        <p>{gist}</p>
      </ClickableWrapper>
    </Link>
  );
}

type CollapsibleProps = BasicCardProps & {
  subtitle: string;
  note: string;
  bordered?: boolean;
  overlay?: boolean;
};

const StyledArticle = styled.article`
  max-width: 900px;
  min-width: 300px;
`;

const StyledAside = styled.aside`
  margin-top: 16px;
`;

export function Collapsible({
  id,
  title,
  gist,
  subtitle,
  note,
}: CollapsibleProps) {
  return (
    <StyledArticle
      id={`article-collapsible-${id}`}
      data-cy-id={`article-collapsible-${id}`}
    >
      <StyledCardTitle>{title}</StyledCardTitle>
      <p>{gist}</p>
      <StyledAside>
        <ExpansiveButton
          label="Show more"
          title={subtitle}
          content={note}
          altLabel="Show less"
        />
      </StyledAside>
    </StyledArticle>
  );
}

export default function Card({ id, title, gist }: CardProps) {
  return (
    <article id={id}>
      <h3>{title}</h3>
      <section className="teaser section card-content">
        <p>{gist}</p>
      </section>
    </article>
  );
}
