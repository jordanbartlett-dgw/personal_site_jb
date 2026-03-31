# Pending Work

## Before First Deploy
1. **Create Supabase table** — Run this SQL in Supabase dashboard:
   ```sql
   CREATE TABLE contact_submissions (
     id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
     name text NOT NULL,
     email text NOT NULL,
     company text DEFAULT '',
     inquiry_type text NOT NULL CHECK (inquiry_type IN ('merchandise', 'partnership', 'general')),
     notes text DEFAULT '',
     created_at timestamptz DEFAULT now()
   );

   ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

   CREATE POLICY "Allow anonymous inserts"
     ON contact_submissions FOR INSERT
     TO anon
     WITH CHECK (true);

   CREATE POLICY "Allow authenticated reads"
     ON contact_submissions FOR SELECT
     TO authenticated
     USING (true);
   ```

2. **Get Beehiiv credentials** — API key and publication ID from Beehiiv dashboard

3. **Set environment variables** on Vercel:
   - `BEEHIIV_API_KEY`
   - `BEEHIIV_PUBLICATION_ID`
   - `NEXT_PUBLIC_BEEHIIV_SUBSCRIBE_URL`
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`

4. **Deploy to Vercel** — `npx vercel` then configure domain

5. **Link domain** — Point jordanbartlett.co via Cloudflare DNS to Vercel

## After Deploy
- **Design polish** with Impeccable skills (user requested using Impeccable skills for UI refinement)
- **Copy refinement** — user said "we can work on wording when we get to building"
- **Visual review and iteration** — user hasn't yet reviewed the live site

## Future Features
- Additional pages beyond homepage/blog/connect
- Photography when available (currently typography-only)
- Enhanced blog features (categories, search)
