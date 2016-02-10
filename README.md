# Bloginator
*A simple markdown to html/json converter*
-----

## How to

1. Write your post in markdown
  ```markdown
  # Hey
  *Just a post*
  ```

2. Add metadata at the top od the file
  ```yaml
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
  ```

3. Build your blog structure
  ```
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
                 \- 1
                    |
                     \- back-to-the-future.jpg
  ```

4. Run bloginator
  ```sh
  cd path/to/blog;
  bloginate;
  ```

5. Voila!
  ```
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
  ```

6. Serve blog files

    Install node http-server
    ```sh
    npm install -g http-server
    ```

    Then
    ```sh
    http-server --cors -p 8081
    ```

#### To run packer to build a docker image on Mac.

If you need to run packer to build your docker image on a Mac, type the following commands in your shell:

`mkdir ~/tmp`
`TMPDIR=~/tmp /usr/local/packer/packer build -var 'source_code_fld=<path-to-bloginator-folder-on-local-machine>' -var 'tag=<set-your-tag>' -var 'docker_repo_imgName=hevnly/bloginator' packerImage.json`

#### Run docker image

`docker run -it <image-name>:<image-tag> bash`

If you need to run it using hhg, you will need to mount a volume containing hhg, like so:

`docker run -it -v <source-path-to-hhg-folder>:<destination-path-you-want-for-hhg-in-container> -w <destination-path-you-want-for-hhg-in-container> <image-name>:<image-tag> bash`
