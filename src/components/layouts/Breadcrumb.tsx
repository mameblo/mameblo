import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

interface Props {
  blogPageInfo?: {
    categoryId: string;
    categoryName: string;
    blogTitle: string;
  };
  pageTitle?: string;
}

const Breadcrumb: React.FC<Props> = ({ blogPageInfo, pageTitle }) => {
  const router = useRouter();
  const path = router.asPath;

  const isBlogPage = /\/blogs\/.+$/.test(path);

  return (
    <MyBreadcrumb>
      <BreadcrumbItem>
        <Link href="/">
          <a>サイト名</a>
        </Link>
      </BreadcrumbItem>
      {isBlogPage && (
        <>
          <BreadcrumbItem>
            <Link
              href="/category/[id]"
              as={`/category/${blogPageInfo?.categoryId}`}
            >
              <a>{blogPageInfo?.categoryName}</a>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>{blogPageInfo?.blogTitle}</BreadcrumbItem>
        </>
      )}
      {pageTitle && <BreadcrumbItem>{pageTitle}</BreadcrumbItem>}
    </MyBreadcrumb>
  );
};

const MyBreadcrumb = styled.ul`
  margin-bottom: 20px;
  list-style: none;
`;

const BreadcrumbItem = styled.li`
  position: relative;
  display: inline;
  margin-right: 20px;
  a {
    color: #331cbf;
    &:hover {
      text-decoration: underline;
    }
  }
  &::after {
    position: absolute;
    content: ">";
    bottom: -1px;
    right: -15px;
  }
  &:last-child::after {
    content: "";
  }
`;

export default Breadcrumb;
