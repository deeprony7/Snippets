### Mock api locally

1. Create a json file you expect the response to have like:
   ```{
       'some': 'data'
   }
   ```
2. Run the command on a that directory or any parent directory
   `python3 -m http.server`

3. Now you can call your data at `http://localhost:8000/test.json`
