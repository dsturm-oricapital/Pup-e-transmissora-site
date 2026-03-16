# PuP-E Transmissora

A static institutional website for PuP-E Transmissora, a Brazilian energy transmission asset acquisition and management company. Written in Portuguese (pt-BR).

## Project Structure

- `index.html` — Single-page static website with all HTML, CSS, and content inline

## Running the Project

The site is served via Python's built-in HTTP server:

```
python3 -m http.server 5000 --bind 0.0.0.0
```

It runs on port 5000 (configured as the "Start application" workflow).

## Notes

- `logo_pupe_transmissora_real.png` is referenced in the HTML but not included in the repository. The site loads without it (header shows without a logo image).
- No build system, no backend, no dependencies — pure HTML/CSS.
- Deployment is configured as a static site.
