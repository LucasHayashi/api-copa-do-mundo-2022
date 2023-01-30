import { api } from "./services/api.js";
import { Router } from 'express';

const router = Router();

// Informações sobre a classificação

router.get('/standings', async (req, res) => {
    const request = await api.get("/team");
    res.send(request.data)
});

router.get('/standings/:id', async (req, res) => {
    const groupId = req.params.id;
    const request = await api.get(`/standings/${groupId}`);
    res.send(request.data)
});

// Informações sobre as partidas

router.get('/match', async (req, res) => {
    const request = await api.get("/match");
    res.send(request.data)
});

router.get('/match/:id', async (req, res) => {
    const matchId = req.params.id;
    const request = await api.get(`/match/${matchId}`);
    res.send(request.data)
});

// Informações sobre times

router.get('/team', async (req, res) => {
    const request = await api.get("/team");
    res.send(request.data)
});

router.get('/team/:id', async (req, res) => {
    const teamId = req.params.id;
    const request = await api.get(`/team/${teamId}`);
    res.send(request.data)
});

export default router;