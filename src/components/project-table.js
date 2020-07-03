import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const TableContainer = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.4) 80%,
    rgba(0, 0, 0, 0.5) 100%
  );
  overflow: auto;
  padding: 1rem;
  border-radius: 0.4rem;
  height: 300px;
`;

const ProjectTable = ({ posts }) => (
  <TableContainer>
    {console.log(posts)}
    <table>
      <thead>
        <tr>
          <th>Project</th>
          <th>Technologies used</th>
          <th>Finished in</th>
          <th>More information</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(({ frontmatter, id }) => (
          <tr key={id}>
            <td>{frontmatter.title}</td>
            <td>{frontmatter.path}</td>
            <td>{frontmatter.date}</td>
            {frontmatter.path !== '' ? (
              <td>
                <Link
                  to={frontmatter.path}
                  style={{
                    textDecoration: 'none',
                    borderBottom: '1px solid white',
                  }}
                >
                  Read more
                </Link>
              </td>
            ) : null}
          </tr>
        ))}
      </tbody>
    </table>
  </TableContainer>
);

export default ProjectTable;
