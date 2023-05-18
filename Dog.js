class Dogs {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogHtml() {
    let { name, avatar, age, bio, hasbeenSwiped, hasbeenLiked } = this;
    this.hasbeenSwiped = true;
    return ` <h2 class="dog_name">${name}, ${age}</h2>
    <p class="dog_bio">${bio}</p>`;
  }
  dogAvatar() {
    return `url(assets/${this.avatar}`;
  }
}

export default Dogs;
