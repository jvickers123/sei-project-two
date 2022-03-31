
# General Assembly Project 2 - Movie Search

My second project at General Assembly. We built a movie search website that consumes a third party API to allow users to search for information on movies. It was my first time using React and an API. It was a 48 hour pair-coded project with [Alex Lovegrove](https://github.com/lovegroa). 

![screenshot-of-project](https://i.imgur.com/8KtXLig.png)

## Brief

Build a React application that consumes a public API.

## Deployment

The app has been deployed with Netlify and is available [here](https://jonnyalexfilmsearch123.netlify.app/)




## Code Installation

* Clone or download the repo

* Install Yarn by running `Yarn`

* Start server by running `Yarn Start`

## Technologies Used

* React 
* Axios
* SASS
* GitHub
* React Router DOM



## Approach Taken

### Planning

We initially decided on making a Premier League project using the Fantasy Premier League API. We made wireframes and tested out the endpoints using Insomnia. However, when we came to try to access the API in VSCode, using local host, we realised that the API did not allow HTTP requests. We then spent some time attempting to use proxies to get around this problem but eventually decided it was taking too much time and we should pick another API.

After a while attempting to find another free football based API, we decided to change the concept and went for a movie based theme using the [OMDB Api](http://www.omdbapi.com/) instead.

As we had lost a fair bit of time trying to make the football API work, so we made a very quick wire-frame and moved to starting the development.

### Development.

We began by attempting to use Liveshare in VSCode but this proved to be unworkable due to poor internet connection. So we decided to work together with me sharing my screen to get the basic structure of the page sorted before splitting off and doing separate components.

Using the React Router DOM we made a basic navigation bar, a home page, a search results page and a film detail page. We then looked into how to set up version control and different branches on GitHub to allow us to work on separate components. As this was the first time for both of us, we ran through a couple of changes together just altering the README file so that we could get the hang of merging and dealing with conflicts.

We then split the work, I worked on the search bar and search results page, whilst Alex worked on the film detail and home page. We continued to be on a zoom call together to troubleshoot any problems or talk through ideas out loud. We also continued to go through any merge process on GitHub together as we both wanted to get used to the process of version control and fixing merge conflicts.

#### Search Bar

I started with the search bar in the navigation bar as the search results page needed it to function. 

I created a form with one text input and a submit button. The value of the input was set to a React state, called 'searchValue’, which was updated using the 'updateSearchValue' function that was triggered on every change to the input. On submit, the form navigates to the search results page with the ‘searchValue’ stored in the URL as params. It then clears the 'searchValue' state to allow for future searches.

![code-search-input](https://i.imgur.com/x2qDRWQ.png) 

![code-search-value-functions](https://i.imgur.com/0aeRb47.png )

#### Search Results Page

This page used a `useEffect()` that was triggered on any change to the search term in the URL params to make an axios GET request to the API to receive the search results.

![code-get-request](https://i.imgur.com/gx1XGCO.png)

Once the results had been saved as an array to React state labelled ‘films’, the component would map through the array and return a div containing the title, year, poster and genre of the film.

Each result was wrapped in a `<Link>` from the react-router-DOM which linked to Alex’s film detail page with the id of the film passed in the URL as params. I also included error handling and a loading spinner to the JSX for better user experience.

![code-results-JSX](https://i.imgur.com/oj5zdol.png)

#### Preview Search Bar

I wanted to replicate the search bar functionality that you see on sites such as [imdb.com](https://www.imdb.com/) where a preview of the search results are displayed as you type into the search bar.

I, therefore, created a `useEffect()` that triggered every time the ‘searchValue’ state changed. It sends an axios GET request to a different endpoint of the API that returns the first value of a search. It then saves the data to a React state called ‘quickSearchFilm’.

![code-preview-search-function](https://i.imgur.com/z5MEMjZ.png)

Once saved, the component returns a div that contains the title, poster and year of the film. Again this was wrapped in a `<Link>` which clears the ‘searchValue’ state and navigates to Alex’s film detail page.

![code-preview-search-JSX](https://i.imgur.com/SoMvXOW.png )

I also added a 'Back' button to the navigation bar that allowed users to return to the results page without losing the previous search. 

### Styling

Having checked that the functionality worked between our relative components we moved on to styling. We decided to use SASS and agreed on some theme constants such as colours, border widths and fonts.

We then split off and styled our separate components whilst keeping in touch in order to keep consistency across the site.

![screenshot-styling](https://i.imgur.com/zFc9C4b.png)


## Bugs

When the preview search result is shown it pushes the search box input to be out of line with the search button. We spent a while trying to fix it but eventually ran out of time before the deadline.

## Challenges

A big challenge to overcome was the time we lost in attempting to get the original football API to work. This taught me to check each aspect of working with an API before going ahead with a project.

## Wins

I was particularly proud of the preview search results. I think it gave the site a more modern feel as the user could see results as they typed.

## Key Learning

This was the first cooperative project I had attempted and it was a great experience. Learning how to communicate ideas and concepts and come to collective decisions was useful, as was the practical experience gained in learning how to use version control in GitHub.

It was also good to get to grips with using React. Being able to split things into different components gave a structure to our code that made the coding experience a lot easier to navigate.
