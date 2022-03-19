const internCard = (profile) => `
  <div class="card">
    <div class="card__title">
      <h3">${profile.getName()}</h3>
      <p class="p__role">
        ${profile.getRole()}
      </p>
    </div>
    <div class="card">
      <ul class="list">
        <li class="list__item">
          <span class="font-weight-bold">ID: </span>
          ${profile.getID()}
        </li>
        <li class="list__item">
          <span">Email: </span>
          <a href="mailto:${profile.getEmail()}">${profile.getEmail()}</a>
        </li>
        <li class="list-group-item">
          <span>School: </span>
          ${profile.getSchool()}
        </li>
      </ul>
    </div>
  </div>
`;
module.exports = internCard;
