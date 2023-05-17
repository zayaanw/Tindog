class Dogs {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogHtml() {
    const { name, avatar, age, bio, hasbeenSwiped, hasbeenLiked } = this;
    return ` <h2 class="dog_name">${name}</h2>
    <p class="dog_bio">${bio}</p>`;
  }
  dogAvatar() {
    return `url(assets/${this.avatar}`;
  }

  doginfo() {
    const { name, avatar } = this;
    console.log(`testing ${name}`);
  }
}

export default Dogs;
