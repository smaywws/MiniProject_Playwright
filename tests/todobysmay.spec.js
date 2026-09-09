import { test, expect } from '@playwright/test';

test('test to-do app @smay', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').fill('buy shoes');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('lunch');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('sleep');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('test');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'test' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'sleep' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
});