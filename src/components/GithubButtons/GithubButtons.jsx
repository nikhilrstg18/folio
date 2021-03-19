import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = ({ repo, isFollow = true }) => (
  <div className="gh-btn-container">
    {!isFollow && (
      <GitHubButton
        id="fork"
        className="github-button"
        href={`${repo}/fork`}
        data-icon="octicon-repo-forked"
        data-size="large"
        data-show-count="true"
        aria-label={`Fork nikhilrstg18/${repo} on GitHub`}
      >
        Fork
      </GitHubButton>
    )}
    {!isFollow && (
      <GitHubButton
        className="github-button"
        href={`${repo}`}
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label={`Star nikhilrstg18/${repo} on GitHub`}
      >
        Star
      </GitHubButton>
    )}

    {isFollow && (
      <GitHubButton
        href="https://github.com/nikhilrstg18"
        data-color-scheme="no-preference: dark; light: light; dark: dark;"
        data-size="large"
        aria-label="Follow @nikhilrstg18 on GitHub"
      >
        Follow @nikhilrstg18
      </GitHubButton>
    )}
  </div>
);

export default GithubButton;
