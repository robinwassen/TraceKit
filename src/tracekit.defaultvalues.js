
//Default options:
if (!TraceKit.remoteFetching) {
  TraceKit.remoteFetching = true;
}

if (!TraceKit.collectWindowErrors) {
  TraceKit.collectWindowErrors = true;
}

if (!TraceKit.linesOfContext || TraceKit.linesOfContext < 1) {
  // 5 lines before, the offending line, 5 lines after
  TraceKit.linesOfContext = 11;
}
