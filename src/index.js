// operator-api · Express HTTP wrapper around operator-sdk · MIT · AI-Native Solutions
import express from 'express';

const app = express();
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, tool: 'operator', version: '1.0.0' }));

app.post('/goView', async (req, res) => {
  try {
    const { goView } = await import('@ai-native-solutions/operator-sdk');
    const out = typeof goView === 'function' ? await goView(req.body) : { error: 'goView not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/goPhase', async (req, res) => {
  try {
    const { goPhase } = await import('@ai-native-solutions/operator-sdk');
    const out = typeof goPhase === 'function' ? await goPhase(req.body) : { error: 'goPhase not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/goFw', async (req, res) => {
  try {
    const { goFw } = await import('@ai-native-solutions/operator-sdk');
    const out = typeof goFw === 'function' ? await goFw(req.body) : { error: 'goFw not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/lsGet', async (req, res) => {
  try {
    const { lsGet } = await import('@ai-native-solutions/operator-sdk');
    const out = typeof lsGet === 'function' ? await lsGet(req.body) : { error: 'lsGet not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/lsSet', async (req, res) => {
  try {
    const { lsSet } = await import('@ai-native-solutions/operator-sdk');
    const out = typeof lsSet === 'function' ? await lsSet(req.body) : { error: 'lsSet not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/newEngagementState', async (req, res) => {
  try {
    const { newEngagementState } = await import('@ai-native-solutions/operator-sdk');
    const out = typeof newEngagementState === 'function' ? await newEngagementState(req.body) : { error: 'newEngagementState not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('operator-api listening on :' + PORT));
