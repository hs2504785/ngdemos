## 1st Prevent performance problems

- set OnPush change detection angular.json
- log http request times
- Set budgets

## Make OnPush default change detection strategy

```json
// angular.json
{
  "blogdemo": {
    "projectType": "library",
    "schematics": {
      "@schematics/angular:component": {
        "style": "scss",
        "changeDetection": "OnPush"
      }
    }
  }
}
```

## Different ways to performance optimize your app

- Optimize Change Detection
- Optimize network
- Optimize UX

# Load time performance

- Reduce initial load
- Prevent Downloading same resource again

## Soln

1. Lazy Loading
2. Service Worker

# Run Time Performance

- Change Detection

## How to priortize performance optimization

- Number 1 focus: Clean architecture and design
- 2- Start with
  - OnPush change detection
  - Lazy loading modules
  - Use Angular PWA
- Diagnose and treat other problems as they occur

## Other

- gzip
- http2
- Server side rendering with Angular Universal
