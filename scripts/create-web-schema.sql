-- RetailSpec Marketing Site Schema
-- Database: retailspec-web (separate Neon project)
-- Run against the new Neon project after creation.

-- ─── Prospects (user/account table) ────────────────────────────────────────
-- Every registrant on the marketing site is a sales lead.
-- role: 'guest' (self-registered) or 'prospect' (vetted by RetailSpec team)

CREATE TABLE prospects (
  id              SERIAL PRIMARY KEY,
  email           TEXT NOT NULL UNIQUE,
  name            TEXT NOT NULL,
  company         TEXT,
  password_hash   TEXT,                            -- NULL for OAuth-only users
  role            TEXT NOT NULL DEFAULT 'guest',    -- 'guest' | 'prospect'
  avatar_url      TEXT,

  -- OAuth provider linkage (future phase)
  linkedin_id     TEXT UNIQUE,
  linkedin_url    TEXT,
  google_id       TEXT UNIQUE,

  -- Progressive profiling (populated over subsequent visits)
  job_title       TEXT,
  company_size    TEXT,                             -- '1-10', '11-50', '51-200', '201-500', '500+'
  industry        TEXT,
  num_locations   TEXT,                             -- '1-5', '6-10', '11-20', '21-50', '50+'
  challenges      TEXT,                             -- Free-text operational challenges
  profiling_step  INT NOT NULL DEFAULT 0,           -- 0=none, 1=title+size, 2=locations, 3=challenges

  -- Source tracking
  source          TEXT,                             -- 'credentials', 'linkedin', 'google'
  utm_source      TEXT,
  utm_medium      TEXT,
  utm_campaign    TEXT,

  -- Lifecycle
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_login_at   TIMESTAMPTZ
);

CREATE INDEX idx_prospects_email ON prospects(email);
CREATE INDEX idx_prospects_role ON prospects(role);

-- ─── Content Access Log ────────────────────────────────────────────────────
-- Tracks every access to gated content for future lead scoring. Append-only.

CREATE TABLE content_access_log (
  id          SERIAL PRIMARY KEY,
  prospect_id INT NOT NULL REFERENCES prospects(id) ON DELETE CASCADE,
  content_key TEXT NOT NULL,                        -- e.g. 'security/encryption-deep-dive'
  gate_level  TEXT NOT NULL,                        -- 'guest' | 'prospect'
  accessed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_cal_prospect ON content_access_log(prospect_id);
CREATE INDEX idx_cal_content ON content_access_log(content_key);
