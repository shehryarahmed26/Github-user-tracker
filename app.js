const input = document.getElementById('input')
const search = document.getElementById('search')
const form = document.querySelector('form')
const userimg = document.querySelector('.user-img')
const user = document.getElementById('username')
const userbio = document.getElementById('bio')
const userfollowers = document.getElementById('followers')
const userlocation = document.getElementById('location')


search.addEventListener('click', async (e) => {
    // username.value = ''
    let username = input.value
    userimg.style.display = 'inline-block'
    const api = `https://api.github.com/users/${username}`
    const url = await fetch(api)
    const data = await url.json()
    console.log(data.followers);
    userimg.setAttribute('src', data.avatar_url)
    user.innerHTML = `Name: ${data.name}`
    userbio.innerHTML = `${data.bio}`
    userfollowers.innerHTML = `Followers: ${data.followers} Following: ${data.following} Repo: ${data.repo} `
    userlocation.innerHTML = `Location: ${data.location}`
})