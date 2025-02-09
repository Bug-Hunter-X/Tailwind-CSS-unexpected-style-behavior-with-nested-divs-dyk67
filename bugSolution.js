```javascript
// Solution 1: Using more specific classes
<div class="flex">
  <div class="bg-red-500 p-4">
    <p>This is a red div.</p>
    <div class="bg-blue-500 p-2 relative">
      <p>This is a blue div (nested).</p>
    </div>
  </div>
</div>

//Solution 2: Using the `!important` flag (Use with caution)
<div class="flex">
  <div class="bg-red-500 p-4">
    <p>This is a red div.</p>
    <div class="bg-blue-500 p-2">
      <p class="!important">This is a blue div (nested).</p>
    </div>
  </div>
</div>
```