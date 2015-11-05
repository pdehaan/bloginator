# Bloginator
*A simple markdown to html/json converter*
-----

Source in bitbucket:
<https://bitbucket.org/hevnly/bloginator>

Open issues:
<https://hevnly.atlassian.net/projects/BLOG/issues/?filter=allopenissues>

## How it works

1. Write your post in markdown

        :::markdown
        # Hey
        *Just a post*

2. Add metadata at the top od the file

        :::yaml
        ---
        title:
        subTitle:
        readingTime:
        heroImage:
        date:
        slug:
        tags:
        category:
        editionName:
        editionNumber:
        ---

3. Build your blog structure

        blog/
          |
           \- source/
                |
                | - posts/
                |     |
                |      \- back-to-the-future.md
                |
                |
                 \- images/
                      |
                       \- back-to-the-future.jpg

4. Run bloginator

        :::shell
        cd path/to/blog;
        bloginate;

5. Voila!

        blog
          |
          | - source
          |
           \- build
                |
                | - posts/
                |     |
                |      \- 26-10-1985-back-to-the-future.json
                |
                | - tags/
                |     |
                |      \- jigawatt.json
                |
                | - editions/
                |     |
                |      \- oct-15.json
                |
                | - pages/
                |     |
                |     | - page-0.json
                |     |
                |      \- page-1.json
                |
                | - categories.json
                |
                | - tags.json
                |
                 \- editions.json

6. Serve blog files

    Install node http-server

        :::shell
        npm install -g http-server


    Then

        :::shell
        http-server --cors -p 8081
