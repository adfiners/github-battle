import React from 'react';

export default function RepoGrid(props) {
  return (
    <ul className='popular-list'>
      {props.repos.map((repo, index) => {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-item'>
              <li>
                <img className='avatar' src={repo.owner.avatar_url} alt={'Avatar for ' + repo.owner.login} />
              </li>
              <li><a href={repo.html_url} target='_blank' rel="noopener noreferrer">{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count}</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}
