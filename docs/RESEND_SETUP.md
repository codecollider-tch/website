# Resend Email Setup Guide for GoDaddy

## Overview
This guide will help you verify your `codecollider.tech` domain with Resend to enable email sending through the contact form.

---

## Step 1: Access GoDaddy DNS Management

1. Log in to [godaddy.com](https://godaddy.com)
2. Go to **My Products**
3. Find `codecollider.tech`
4. Click **DNS** (or **Manage DNS**)

---

## Step 2: Add DNS Records

You need to add 4 DNS records. Click **Add** for each record.

### ✅ Record 1: DKIM (Domain Verification)

**Purpose:** Verifies your domain ownership and enables DKIM signing

- Click **Add** → Select **TXT**
- **Name:** `resend._domainkey`
- **Value:** `p=MIGfMA0GCSqGSIb3DQEB...`
  - Copy the FULL value from Resend dashboard (Domain Verification section)
- **TTL:** `1 Hour` (or 600 seconds)
- Click **Save**

---

### ✅ Record 2: MX Record (Mail Exchange)

**Purpose:** Routes outbound emails through Resend servers

- Click **Add** → Select **MX**
- **Name:** `send`
- **Value:** `feedback-smtp.us-east-...`
  - Copy the full value from Resend dashboard (Enable Sending section)
- **Priority:** `10`
- **TTL:** `1 Hour`
- Click **Save**

---

### ✅ Record 3: SPF Record (Sender Policy Framework)

**Purpose:** Authorizes Resend to send emails on behalf of your domain

- Click **Add** → Select **TXT**
- **Name:** `send`
- **Value:** `v=spf1 include:amazons...`
  - Copy the full value from Resend dashboard (Enable Sending section)
- **TTL:** `1 Hour`
- Click **Save**

---

### ✅ Record 4: DMARC Record (Optional but Recommended)

**Purpose:** Adds email authentication policy

- Click **Add** → Select **TXT**
- **Name:** `_dmarc`
- **Value:** `v=DMARC1; p=none;`
- **TTL:** `1 Hour`
- Click **Save**

---

## Step 3: Wait for DNS Propagation

- **Typical time:** 5-30 minutes
- **Maximum time:** Up to 48 hours (rare)
- DNS changes need time to propagate across the internet

---

## Step 4: Verify Domain in Resend

1. Go to [resend.com/domains](https://resend.com/domains)
2. Find `codecollider.tech`
3. Wait for status to change to ✅ **Verified**
4. You may need to click **Verify** button to trigger the check

---

## Step 5: Update Code

Once verified, update the email sender in `app/api/contact/route.ts`:

```typescript
// Change from:
from: 'onboarding@resend.dev',

// To:
from: 'noreply@codecollider.tech',
// or
from: 'contact@codecollider.tech',
// or any email you want at your domain
```

---

## Troubleshooting

### Issue: "Name" field errors in GoDaddy

GoDaddy automatically appends `.codecollider.tech` to names.

If `resend._domainkey` doesn't work, try:
- Just `resend._domainkey` (no domain suffix)
- GoDaddy will make it `resend._domainkey.codecollider.tech`

### Issue: Verification takes too long

1. Double-check all values are copied correctly (no extra spaces)
2. Wait at least 30 minutes
3. Try clicking **Verify** button in Resend dashboard
4. Use `nslookup` or [dns checker tools](https://dnschecker.org/) to verify records are live

### Issue: MX record conflicts

If you already have MX records with name `send`, you may need to:
1. Delete old MX records with name `send`
2. Add the new Resend MX record

---

## Testing

### While Waiting for Verification

Use the default Resend domain in your code:
```typescript
from: 'onboarding@resend.dev'
```

### After Verification

1. Update code to use your domain: `from: 'noreply@codecollider.tech'`
2. Restart dev server: `pnpm run dev`
3. Test the contact form
4. Check that emails arrive at `dbozhyk@codecollider.tech`

---

## Important Notes

- ✅ **Enable Sending** toggle must be ON in Resend dashboard
- ❌ **Enable Receiving** is NOT needed for contact forms (only for receiving emails)
- 🔒 The `replyTo` field will contain user's email for easy replies
- 📧 Sender will show as: `noreply@codecollider.tech` or whatever you set
- 💬 Reply button will send to the user's email (from `replyTo` field)

---

## Environment Variables

Make sure you have these in `.env` or `.env.local`:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_TO_EMAIL=dbozhyk@codecollider.tech
```

---

## Resources

- [Resend Documentation](https://resend.com/docs)
- [Resend Domains Dashboard](https://resend.com/domains)
- [DNS Checker Tool](https://dnschecker.org/)
- [GoDaddy DNS Help](https://www.godaddy.com/help/manage-dns-records-680)

---

## Support

If you encounter issues:
1. Check Resend dashboard for detailed error messages
2. Verify all DNS records are added correctly
3. Wait for DNS propagation (be patient!)
4. Contact Resend support if needed

---

**Status:** ⏳ In Progress → ✅ Verified → 🚀 Production Ready

