---
title: Technology We Use
description: A plain-English look at the tools behind the AAFC Builders website.
category: Technology
tags: React,TypeScript,Vite,Tailwind
wikipedia: React_(software)
---

The AAFC Builders website uses React, TypeScript, Vite, Tailwind CSS, and a collection of interface components. Each tool has a specific job.

## React

React helps build pages from reusable pieces. A project card can use the same structure across a whole gallery while showing different information.

## TypeScript

TypeScript catches many mistakes while code is being written. It helps keep data shapes consistent, especially when a page receives information from an outside API.

## Vite

Vite runs the development environment and prepares the client files for deployment. The wiki articles on this site are included in that build.

## Tailwind CSS

Tailwind provides small styling utilities. We use them to keep spacing, typography, and responsive layouts consistent.

## React Query

React Query handles fetching and caching outside data. A failed GitHub request should not make the rest of the portfolio disappear.

## What runs on the deployed site

This deployment serves a static React application. Its Express development server is not an API on Vercel. Public GitHub and Wikipedia requests run in the visitor's browser.
